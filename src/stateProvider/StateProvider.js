import {createContext,useReducer,useContext} from "react";

export const DataLayerContext = createContext();

export const StateProvider = ({initialState, reducer, children}) => {
  <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </DataLayerContext.Provider>
};

export const useDataLayerValue = () => useContext(DataLayerContext)