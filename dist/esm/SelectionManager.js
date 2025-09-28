import { makeAutoObservable } from 'mobx';
export default class SelectionManager {
    constructor(options = {}) {
        this.allSelected = options.allSelected ?? false;
        makeAutoObservable(this);
    }
    available = new Set();
    selected = new Set();
    get selectedKeys() {
        return Array.from(this.selected);
    }
    get hasSelection() {
        return this.allSelected || this.selected.size > 0;
    }
    get allAvailableSelected() {
        if (this.available.size === 0) {
            return false;
        }
        for (const key of this.available) {
            if (!this.selected.has(key)) {
                return false;
            }
        }
        return true;
    }
    isSelected(key) {
        return this.selected.has(key);
    }
    allSelected;
    register(key) {
        this.available.add(key);
        if (this.allSelected) {
            this.selected.add(key);
        }
        return () => {
            this.unregister(key);
        };
    }
    unregister(key) {
        this.available.delete(key);
        this.selected.delete(key);
    }
    select(key) {
        this.selected.add(key);
    }
    deselect(key) {
        this.selected.delete(key);
    }
    set(key, selected) {
        if (selected) {
            this.select(key);
        }
        else {
            this.deselect(key);
        }
    }
    toggle(key) {
        if (this.selected.has(key)) {
            this.selected.delete(key);
        }
        else {
            this.selected.add(key);
        }
        this.allSelected = false;
    }
    selectAllAvailable() {
        this.selected = new Set(this.available);
    }
    selectAll() {
        this.selectAllAvailable();
        this.allSelected = true;
    }
    selectNone() {
        this.selected.clear();
        this.allSelected = false;
    }
}
//# sourceMappingURL=SelectionManager.js.map