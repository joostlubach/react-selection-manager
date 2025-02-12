import React from 'react'
import SelectionManager from './SelectionManager'
import { Key, SelectionManagerProviderProps } from './types'

const SelectionContext = React.createContext<SelectionManager<any> | null>(null)

export const SelectionManagerProvider = (props: SelectionManagerProviderProps) => {
  return (
    <SelectionContext.Provider value={props.manager}>
      {props.children}
    </SelectionContext.Provider>
  )
}

export function useSelectionManager<K extends Key>() {
  const context = React.useContext(SelectionContext)
  if (context == null) {
    throw new Error('useSelectionManager must be used within a SelectionManagerProvider')
  }
  return context as SelectionManager<K>
}