import {atom, selector} from "recoil";

export const countState = atom({
    key:'countState',
    default:0
})

export const textState = atom({
    key:'textState',
    default: ''
})

export const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState)
        return text.length
    }
})

export const todoListState = atom({
    key: 'todoListState',
    default: []
})