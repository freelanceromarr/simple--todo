import { STATUSFILTER, COLORFILTER } from "./actionTypes"


export const filterByStatus = (status) => {
    return {
        type: STATUSFILTER,
        payload: status
    }
}

export const filterByColor = (changeType, color) => {
    return {
        type:  COLORFILTER,
        payload: {
            changeType, 
            color
        }
    }
}

