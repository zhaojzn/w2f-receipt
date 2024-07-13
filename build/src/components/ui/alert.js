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
exports.AlertDescription = exports.AlertTitle = exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, role: "alert", className: (0, utils_1.cn)(alertVariants({ variant }), className), ...props })));
exports.Alert = Alert;
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h5", { ref: ref, className: (0, utils_1.cn)("mb-1 font-medium leading-none tracking-tight", className), ...props })));
exports.AlertTitle = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("text-sm [&_p]:leading-relaxed", className), ...props })));
exports.AlertDescription = AlertDescription;
AlertDescription.displayName = "AlertDescription";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9hbGVydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBQzlCLHVFQUFpRTtBQUVqRSx1Q0FBZ0M7QUFFaEMsTUFBTSxhQUFhLEdBQUcsSUFBQSw4QkFBRyxFQUN2QiwySkFBMkosRUFDM0o7SUFDRSxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsK0JBQStCO1lBQ3hDLFdBQVcsRUFDVCx5RkFBeUY7U0FDNUY7S0FDRjtJQUNELGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0NBQ0YsQ0FDRixDQUFBO0FBRUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHNUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQzNDLGdDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFDLE9BQU8sRUFDWixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FDaEQsS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFBO0FBMkJPLHNCQUFLO0FBMUJkLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFBO0FBRTNCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLCtCQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDhDQUE4QyxFQUFFLFNBQVMsQ0FBQyxLQUNwRSxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUE7QUFlYyxnQ0FBVTtBQWQxQixVQUFVLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQTtBQUVyQyxNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3ZDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLGdDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxLQUNyRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUE7QUFHMEIsNENBQWdCO0FBRjVDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IGFsZXJ0VmFyaWFudHMgPSBjdmEoXHJcbiAgXCJyZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgcC00IFsmPnN2Z34qXTpwbC03IFsmPnN2ZytkaXZdOnRyYW5zbGF0ZS15LVstM3B4XSBbJj5zdmddOmFic29sdXRlIFsmPnN2Z106bGVmdC00IFsmPnN2Z106dG9wLTQgWyY+c3ZnXTp0ZXh0LWZvcmVncm91bmRcIixcclxuICB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICB2YXJpYW50OiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgIGRlc3RydWN0aXZlOlxyXG4gICAgICAgICAgXCJib3JkZXItZGVzdHJ1Y3RpdmUvNTAgdGV4dC1kZXN0cnVjdGl2ZSBkYXJrOmJvcmRlci1kZXN0cnVjdGl2ZSBbJj5zdmddOnRleHQtZGVzdHJ1Y3RpdmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICB9LFxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgQWxlcnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxEaXZFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiAmIFZhcmlhbnRQcm9wczx0eXBlb2YgYWxlcnRWYXJpYW50cz5cclxuPigoeyBjbGFzc05hbWUsIHZhcmlhbnQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxkaXZcclxuICAgIHJlZj17cmVmfVxyXG4gICAgcm9sZT1cImFsZXJ0XCJcclxuICAgIGNsYXNzTmFtZT17Y24oYWxlcnRWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSlcclxuQWxlcnQuZGlzcGxheU5hbWUgPSBcIkFsZXJ0XCJcclxuXHJcbmNvbnN0IEFsZXJ0VGl0bGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxQYXJhZ3JhcGhFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxoNVxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFwibWItMSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmUgdHJhY2tpbmctdGlnaHRcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5BbGVydFRpdGxlLmRpc3BsYXlOYW1lID0gXCJBbGVydFRpdGxlXCJcclxuXHJcbmNvbnN0IEFsZXJ0RGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxQYXJhZ3JhcGhFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1zbSBbJl9wXTpsZWFkaW5nLXJlbGF4ZWRcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5BbGVydERlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID0gXCJBbGVydERlc2NyaXB0aW9uXCJcclxuXHJcbmV4cG9ydCB7IEFsZXJ0LCBBbGVydFRpdGxlLCBBbGVydERlc2NyaXB0aW9uIH1cclxuIl19