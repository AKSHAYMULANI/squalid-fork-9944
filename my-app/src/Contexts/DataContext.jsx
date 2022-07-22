import { createContext } from "react";


const DataContext = createContext();

export const DataContextProvider = ({Children}) => {
        
    return (
        <DataContext.Provider value={'0'}>
        {Children}
        </DataContext.Provider>
        )
}