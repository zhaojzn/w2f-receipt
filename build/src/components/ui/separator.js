"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const SeparatorPrimitive = __importStar(require("@radix-ui/react-separator"));
const utils_1 = require("@/lib/utils");
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: (0, utils_1.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props })));
exports.Separator = Separator;
Separator.displayName = SeparatorPrimitive.Root.displayName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBOEI7QUFDOUIsOEVBQStEO0FBRS9ELHVDQUFnQztBQUVoQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUloQyxDQUNFLEVBQUUsU0FBUyxFQUFFLFdBQVcsR0FBRyxZQUFZLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxFQUN0RSxHQUFHLEVBQ0gsRUFBRSxDQUFDLENBQ0gsdUJBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvQkFBb0IsRUFDcEIsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUNsRSxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUNGLENBQUE7QUFHUSw4QkFBUztBQUZsQixTQUFTLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgU2VwYXJhdG9yUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VwYXJhdG9yXCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZXBhcmF0b3JQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3Q+XG4+KFxuICAoXG4gICAgeyBjbGFzc05hbWUsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIsIGRlY29yYXRpdmUgPSB0cnVlLCAuLi5wcm9wcyB9LFxuICAgIHJlZlxuICApID0+IChcbiAgICA8U2VwYXJhdG9yUHJpbWl0aXZlLlJvb3RcbiAgICAgIHJlZj17cmVmfVxuICAgICAgZGVjb3JhdGl2ZT17ZGVjb3JhdGl2ZX1cbiAgICAgIG9yaWVudGF0aW9uPXtvcmllbnRhdGlvbn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwic2hyaW5rLTAgYmctYm9yZGVyXCIsXG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaC1bMXB4XSB3LWZ1bGxcIiA6IFwiaC1mdWxsIHctWzFweF1cIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbilcblNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IFNlcGFyYXRvclByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7IFNlcGFyYXRvciB9XG4iXX0=