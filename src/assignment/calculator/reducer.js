// setup state
const initialState = '0'
const memoryState = []

// reduce function
function write(state, action) {
    switch (action.payload.type) {
        case 'operator':
            if (action.payload.val == '√'){
                state = '√'
                break
            }
            
            state += action.payload.val
            break
        case 'number':
            state =
                state === '0'
                    ? action.payload.val
                    : (state += action.payload.val)
            break
        case 'del':
            if (state === '0' || state.length == 1) {
                state = '0'
            } else {
                state = state.slice(0, -1)
            }
            break
        case 'clear':
            state = '0'
            break
        case 'equal':

            let isFactorial = state.includes("!");       
            if(isFactorial){
                let number = parseInt(state.replace('!',''));
                let result =1;

                for (let i = 1; i <= number; i++) {
                    result = result * i;
                }
                state = result.toString();
                break;
            }

            let root = state.includes('√')
            
            if (root){  
                angka = state.replace('√','')
                state = Math.sqrt(angka).toString()
                break
            }
            if(state.includes('x')){
                state = eval(state.replace('x', '*')).toString()
            } else if(state.includes('^')){
                state = eval(state.replace('^', '**')).toString()
            } else {
                state = eval(state)
            }
            break
        default:
            break
    }
    return state
}

function memory(state, action) {
    state.push(action.payload)
    return state
}

module.exports = {
    initialState,
    memoryState,
    write,
    memory,
}
