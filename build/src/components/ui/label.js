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
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const LabelPrimitive = __importStar(require("@radix-ui/react-label"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const labelVariants = (0, class_variance_authority_1.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(LabelPrimitive.Root, { ref: ref, className: (0, utils_1.cn)(labelVariants(), className), ...props })));
exports.Label = Label;
Label.displayName = LabelPrimitive.Root.displayName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9sYWJlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBQzlCLHNFQUF1RDtBQUN2RCx1RUFBaUU7QUFFakUsdUNBQWdDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLElBQUEsOEJBQUcsRUFDdkIsNEZBQTRGLENBQzdGLENBQUE7QUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUk1QixDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyx1QkFBQyxjQUFjLENBQUMsSUFBSSxJQUNsQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLENBQUMsS0FDckMsS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFBO0FBR08sc0JBQUs7QUFGZCxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgTGFiZWxQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiXHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IGxhYmVsVmFyaWFudHMgPSBjdmEoXHJcbiAgXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSBwZWVyLWRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBwZWVyLWRpc2FibGVkOm9wYWNpdHktNzBcIlxyXG4pXHJcblxyXG5jb25zdCBMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTGFiZWxQcmltaXRpdmUuUm9vdD4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PiAmXHJcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGxhYmVsVmFyaWFudHM+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8TGFiZWxQcmltaXRpdmUuUm9vdFxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKGxhYmVsVmFyaWFudHMoKSwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5MYWJlbC5kaXNwbGF5TmFtZSA9IExhYmVsUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWVcclxuXHJcbmV4cG9ydCB7IExhYmVsIH1cclxuIl19