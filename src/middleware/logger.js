const logger = (store) => (next) => (action) =>{
    console.group(action.type)
        console.log('Action ', action)
        const dispatchResult = next(action)
        console.log('The New State: ', store.getState())
    console.groupEnd()
    return dispatchResult
}

export default logger
