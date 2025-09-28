import SelectionManager from './SelectionManager'

export type Key = string | number | null

export interface SelectionManagerOptions {
  allSelected?: boolean
}

export interface SelectionManagerProviderProps {
  manager:   SelectionManager<any>
  children?: React.ReactNode
}
