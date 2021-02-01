require('./styles.css')
const { store$, memory$, memoryAction, writeAction } = require('./store')
const { fromEvent } = require('rxjs')
const { map, tap } = require('rxjs/operators')
const { renderPanel, panel, renderOption, showOption,hideOption, select} = require('./presentation')

const numberBtn = document.getElementsByClassName('btn')


const number$ = fromEvent(numberBtn, 'click').pipe(
    map((val) => {
        return val.toElement.getAttribute('data-action')
    })
)

const option$ = fromEvent(select,'change').pipe(
    map((val) => {
        for (const el in val.target) {
            if (val.target[el].selected) {
                return val.target[el].value;
            }
        }
    })
)

option$.subscribe((number)=>{
    store$.dispatch(writeAction({ val: number, type: 'number' }));
    hideOption()
});

number$.subscribe((val) => {
    
    switch (val) {
        case 'clear':
            store$.dispatch(writeAction({ val: null, type: 'clear' }));
            break
        case 'del':
            store$.dispatch(writeAction({ val: null, type: 'del' }));
            break
        case '=':
            store$.dispatch(writeAction({ val: null, type: 'equal' }));
            break
        case 'M':
            memory$.dispatch(memoryAction(panel.value));
            break
        case 'N':
            const stateMemory = memory$.getState();
            renderOption(stateMemory);
            showOption();
            break
        default:
            let isOperator = ['x', '/', '+', '-','√','!'].includes(val);
            if (isOperator){
                store$.dispatch(writeAction({ val: val, type: 'operator' }))
            }
            else{
                store$.dispatch(writeAction({ val: val, type: 'number' }))
            }
            break
    }

})

store$.subscribe(() => {
    const state = store$.getState()
    renderPanel(state)
})

const state = store$.getState()
renderPanel(state)


