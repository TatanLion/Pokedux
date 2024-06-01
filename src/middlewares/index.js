export const logger = (store) => (next) => (action) => { // Estructura especifica del middleware
    console.log(action);
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featuring = [{name: 'eddie'}, ...actionInfo.action.payload]
    const updatedActionInfo = {
        ...actionInfo, 
        action: {...actionInfo.action, payload: featuring}
    }
    next(updatedActionInfo)
}