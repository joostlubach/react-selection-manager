"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionManagerProvider = void 0;
exports.useSelectionManager = useSelectionManager;
const react_1 = __importDefault(require("react"));
const SelectionContext = react_1.default.createContext(null);
const SelectionManagerProvider = (props) => {
    return (react_1.default.createElement(SelectionContext.Provider, { value: props.manager }, props.children));
};
exports.SelectionManagerProvider = SelectionManagerProvider;
function useSelectionManager() {
    const context = react_1.default.useContext(SelectionContext);
    if (context == null) {
        throw new Error('useSelectionManager must be used within a SelectionManagerProvider');
    }
    return context;
}
//# sourceMappingURL=SelectionContext.js.map