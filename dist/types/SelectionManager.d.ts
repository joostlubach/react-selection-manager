import { Key, SelectionManagerOptions } from './types';
export default class SelectionManager<K extends Key> {
    constructor(options?: SelectionManagerOptions);
    available: Set<K>;
    private selected;
    get selectedKeys(): K[];
    get hasSelection(): boolean;
    get allAvailableSelected(): boolean;
    isSelected(key: K): boolean;
    allSelected: boolean;
    register(key: K): () => void;
    unregister(key: K): void;
    select(key: K): void;
    deselect(key: K): void;
    set(key: K, selected: boolean): void;
    toggle(key: K): void;
    selectAllAvailable(): void;
    selectAll(): void;
    selectNone(): void;
}
//# sourceMappingURL=SelectionManager.d.ts.map