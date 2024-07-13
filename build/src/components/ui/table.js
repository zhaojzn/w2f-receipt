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
exports.TableCaption = exports.TableCell = exports.TableRow = exports.TableHead = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("@/lib/utils");
const Table = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { className: "relative w-full overflow-auto", children: (0, jsx_runtime_1.jsx)("table", { ref: ref, className: (0, utils_1.cn)("w-full caption-bottom text-sm", className), ...props }) })));
exports.Table = Table;
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("thead", { ref: ref, className: (0, utils_1.cn)("[&_tr]:border-b", className), ...props })));
exports.TableHeader = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tbody", { ref: ref, className: (0, utils_1.cn)("[&_tr:last-child]:border-0", className), ...props })));
exports.TableBody = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tfoot", { ref: ref, className: (0, utils_1.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })));
exports.TableFooter = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tr", { ref: ref, className: (0, utils_1.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props })));
exports.TableRow = TableRow;
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("th", { ref: ref, className: (0, utils_1.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className), ...props })));
exports.TableHead = TableHead;
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("td", { ref: ref, className: (0, utils_1.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props })));
exports.TableCell = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("caption", { ref: ref, className: (0, utils_1.cn)("mt-4 text-sm text-muted-foreground", className), ...props })));
exports.TableCaption = TableCaption;
TableCaption.displayName = "TableCaption";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS90YWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBRTlCLHVDQUFnQztBQUVoQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUc1QixDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyxnQ0FBSyxTQUFTLEVBQUMsK0JBQStCLFlBQzVDLGtDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxLQUNyRCxLQUFLLEdBQ1QsR0FDRSxDQUNQLENBQUMsQ0FBQTtBQTZGQSxzQkFBSztBQTVGUCxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtBQUUzQixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdsQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyxrQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsS0FBTSxLQUFLLEdBQUksQ0FDNUUsQ0FBQyxDQUFBO0FBc0ZBLGtDQUFXO0FBckZiLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFBO0FBRXZDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2hDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLGtDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxLQUNsRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUE7QUEyRUEsOEJBQVM7QUExRVgsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7QUFFbkMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHbEMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDbEMsa0NBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gseURBQXlELEVBQ3pELFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUMsQ0FBQTtBQTZEQSxrQ0FBVztBQTVEYixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQTtBQUV2QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUcvQixDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQywrQkFDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw2RUFBNkUsRUFDN0UsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFBO0FBZ0RBLDRCQUFRO0FBL0NWLFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFBO0FBRWpDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2hDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLCtCQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGtHQUFrRyxFQUNsRyxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUE7QUFnQ0EsOEJBQVM7QUEvQlgsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7QUFFbkMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHaEMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDbEMsK0JBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsZ0RBQWdELEVBQUUsU0FBUyxDQUFDLEtBQ3RFLEtBQUssR0FDVCxDQUNILENBQUMsQ0FBQTtBQXNCQSw4QkFBUztBQXJCWCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtBQUVuQyxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUduQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyxvQ0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxvQ0FBb0MsRUFBRSxTQUFTLENBQUMsS0FDMUQsS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFBO0FBV0Esb0NBQVk7QUFWZCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTFRhYmxlRWxlbWVudCxcclxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgPHRhYmxlXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwidy1mdWxsIGNhcHRpb24tYm90dG9tIHRleHQtc21cIiwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKSlcclxuVGFibGUuZGlzcGxheU5hbWUgPSBcIlRhYmxlXCJcclxuXHJcbmNvbnN0IFRhYmxlSGVhZGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCxcclxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDx0aGVhZCByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcIlsmX3RyXTpib3JkZXItYlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XHJcbikpXHJcblRhYmxlSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUhlYWRlclwiXHJcblxyXG5jb25zdCBUYWJsZUJvZHkgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPHRib2R5XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXCJbJl90cjpsYXN0LWNoaWxkXTpib3JkZXItMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpXHJcblRhYmxlQm9keS5kaXNwbGF5TmFtZSA9IFwiVGFibGVCb2R5XCJcclxuXHJcbmNvbnN0IFRhYmxlRm9vdGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCxcclxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDx0Zm9vdFxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcImJvcmRlci10IGJnLW11dGVkLzUwIGZvbnQtbWVkaXVtIFsmPnRyXTpsYXN0OmJvcmRlci1iLTBcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpXHJcblRhYmxlRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUZvb3RlclwiXHJcblxyXG5jb25zdCBUYWJsZVJvdyA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTFRhYmxlUm93RWxlbWVudCxcclxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVSb3dFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPHRyXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwiYm9yZGVyLWIgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctbXV0ZWQvNTAgZGF0YS1bc3RhdGU9c2VsZWN0ZWRdOmJnLW11dGVkXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5UYWJsZVJvdy5kaXNwbGF5TmFtZSA9IFwiVGFibGVSb3dcIlxyXG5cclxuY29uc3QgVGFibGVIZWFkID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MVGFibGVDZWxsRWxlbWVudCxcclxuICBSZWFjdC5UaEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPHRoXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwiaC0xMiBweC00IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5UYWJsZUhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiXHJcblxyXG5jb25zdCBUYWJsZUNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxUYWJsZUNlbGxFbGVtZW50LFxyXG4gIFJlYWN0LlRkSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8dGRcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcInAtNCBhbGlnbi1taWRkbGUgWyY6aGFzKFtyb2xlPWNoZWNrYm94XSldOnByLTBcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5UYWJsZUNlbGwuZGlzcGxheU5hbWUgPSBcIlRhYmxlQ2VsbFwiXHJcblxyXG5jb25zdCBUYWJsZUNhcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxUYWJsZUNhcHRpb25FbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNhcHRpb25FbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPGNhcHRpb25cclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcIm10LTQgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKVxyXG5UYWJsZUNhcHRpb24uZGlzcGxheU5hbWUgPSBcIlRhYmxlQ2FwdGlvblwiXHJcblxyXG5leHBvcnQge1xyXG4gIFRhYmxlLFxyXG4gIFRhYmxlSGVhZGVyLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZUZvb3RlcixcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlQ2FwdGlvbixcclxufVxyXG4iXX0=