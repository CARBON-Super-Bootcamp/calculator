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
            let root = state.includes('√')
            if (root){  
                angka = state.replace('√','')
                state = Math.sqrt(angka).toString()
                break
            }
            state = eval(state.replace('x', '*')).toString()
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
