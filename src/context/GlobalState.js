import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {
    inquiries: []
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function sendInquiry(inquiry) {
        dispatch({
            type: 'SEND_INQUIRY',
            payload: inquiry
        })
    }

    return (<GlobalContext.Provider value={{
        inquiries: state.inquiries,
        sendInquiry
    }}>
        {children}
    </GlobalContext.Provider>);

}
