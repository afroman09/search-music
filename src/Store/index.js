import React, { createContext, useReducer } from 'react'

// stateの状態管理、保持

// stateを初期化
const initialState = {
    searched: [],
}



const reducer = (state, action) => {
    switch(action.type) {
        // 複数のstateがある場合、スプレット構文を使用→上書きされるため
        case 'SET_SEARCHED':
        return { ...state, searched: action.payload.searched }
    default:
        return state
    }
}

// createContext = React純正のAPI
// propsとは別の方法でコンポーネントに動的に値を渡す
export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    )
}
