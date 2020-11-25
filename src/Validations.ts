export const assertNumber = (val : any, errorMsg: string) => {
    if (val && isNumeric(val)) {
        return Number.parseInt(val)
    } else {
        throw new Error(errorMsg)
    }
}

export const assertNumeric = (val : any, errorMsg: string) => {
    if (val && isNumeric(val)) {
        return val
    } else {
        throw new Error(errorMsg)
    }
}

export const assertApiToken = (val : any) => {
    if (!val) {
        throw new Error("auth token not defined")
    } else {
        return val
    }
}

export const assertNotNull = (val : any, errorMsg: string) => {
    if (val) {
        return val
    } else {
        const err = new Error(errorMsg)
        throw err;
    }
}

export const assertObjectNotEmpty = (obj: Object, errorMsg: string) => {
    if (isObjectEmpty(obj)) {
        const err = new Error(errorMsg)
        throw err;
    } else {
        return obj
    }
}

export const isObjectEmpty = (obj: Object) => {
    return (Object.keys(obj).length === 0 && obj.constructor === Object)
}

export const assertPhone = (val : string) => {
    return assertNumeric(val, 'phone number has incorect format')
}


function isNumeric(value: any) {
    return /^-{0,1}\d+$/.test(value);
}

