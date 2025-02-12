import { makeAutoObservable } from 'mobx'
import { Key, SelectionManagerOptions } from './types'

export default class SelectionManager<K extends Key> {

  constructor(options: SelectionManagerOptions = {}) {
    this.allSelected = options.allSelected ?? false

    makeAutoObservable(this)
  }

  public available = new Set<K>()

  private selected = new Set<K>()

  public get selectedKeys(): K[] {
    return Array.from(this.selected)
  }

  public get hasSelection() {
    return this.allSelected || this.selected.size > 0
  }

  public get allAvailableSelected() {
    if (this.available.size === 0) { return false }

    for (const key of this.available) {
      if (!this.selected.has(key)) {
        return false
      }
    }

    return true
  }

  public isSelected(key: K) {
    return this.selected.has(key)
  }

  public allSelected: boolean

  public register(key: K) {
    this.available.add(key)
    if (this.allSelected) {
      this.selected.add(key)
    }

    return () => {
      this.unregister(key)
    }
  }

  public unregister(key: K) {
    this.available.delete(key)
    this.selected.delete(key)
  }

  public select(key: K) {
    this.selected.add(key)
  }

  public deselect(key: K) {
    this.selected.delete(key)
  }

  public set(key: K, selected: boolean) {
    if (selected) {
      this.select(key)
    } else {
      this.deselect(key)
    }
  }

  public toggle(key: K) {
    if (this.selected.has(key)) {
      this.selected.delete(key)
    } else {
      this.selected.add(key)
    }
    this.allSelected = false
  }

  public selectAllAvailable() {
    this.selected = new Set(this.available)
  }

  public selectAll() {
    this.selectAllAvailable()
    this.allSelected = true
  }

  public selectNone() {
    this.selected.clear()
    this.allSelected = false
  }

}