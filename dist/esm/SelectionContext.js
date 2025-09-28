import React from 'react';
const SelectionContext = React.createContext(null);
export const SelectionManagerProvider = (props) => {
    return (React.createElement(SelectionContext.Provider, { value: props.manager }, props.children));
};
export function useSelectionManager() {
    const context = React.useContext(SelectionContext);
    if (context == null) {
        throw new Error('useSelectionManager must be used within a SelectionManagerProvider');
    }
    return context;
}
//# sourceMappingURL=SelectionContext.js.map