import { SelectionManager } from 'react-selection-manager'

export type Key = string | number | null

export interface SelectionManagerOptions {
  allSelected?: boolean
}

export interface SelectionManagerProviderProps {
  manager:   SelectionManager<any>
  children?: React.ReactNode
}
