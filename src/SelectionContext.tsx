import React from 'react'
import SelectionManager from './SelectionManager'
import { SelectionManagerProviderProps } from './types'

const SelectionContext = React.createContext<SelectionManager<any> | null>(null)

export const SelectionManagerProvider = (props: SelectionManagerProviderProps) => {
  return (
    <SelectionContext.Provider value={props.manager}>
      {props.children}
    </SelectionContext.Provider>
  )
}

export function useSelectionManager() {
  return React.useContext(SelectionContext)
}