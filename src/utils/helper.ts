//@ts-ignore
export const updateObjectInArray = (items, itemId, objectPropName, newObjProps) => {
    //@ts-ignore
    return items.map(u => {
        if (u[objectPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}