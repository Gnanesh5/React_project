import React from 'react'
import { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const initialState = {
    transactions: [
        {id:1, text:'flower', amount:-20},
        {id:2, text:'bike', amount:-2000},
        {id:3, text:'car', amount:150},
        {id:4, text:'camera', amount:200}
    ]
}

//create context
export const GlobalContext = createContext(initialState)



//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actions to make call ti reducers
    function DeleteTranscation(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id 
        })
    }

    function AddTranscation(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions,
        DeleteTranscation,
        AddTranscation
    }}>
        {children}
    </GlobalContext.Provider>)
}
