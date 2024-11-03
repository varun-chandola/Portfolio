import React, { createContext, useState } from 'react'

export const context = createContext()
const Context = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <context.Provider value={{ open, setOpen }}>
            {children}
        </context.Provider>
    )
}

export default Context