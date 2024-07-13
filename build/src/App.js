"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home")); // Your main component
const ResultPage_1 = __importDefault(require("./pages/ResultPage")); // The new page to display the response
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/response", element: (0, jsx_runtime_1.jsx)(ResultPage_1.default, {}) })] }) }));
};
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsdURBQXlGO0FBQ3pGLHdEQUFnQyxDQUFDLHNCQUFzQjtBQUN2RCxvRUFBNEMsQ0FBQyx1Q0FBdUM7QUFFcEYsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUNMLHVCQUFDLGdDQUFhLGNBQ1osd0JBQUMseUJBQU0sZUFDTCx1QkFBQyx3QkFBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLHVCQUFDLGNBQUksS0FBRSxHQUFJLEVBQ3BDLHVCQUFDLHdCQUFLLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsdUJBQUMsb0JBQVUsS0FBRSxHQUFJLElBQzNDLEdBQ0ssQ0FDakIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGtCQUFlLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUm91dGVzLCBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSc7IC8vIFlvdXIgbWFpbiBjb21wb25lbnRcclxuaW1wb3J0IFJlc3VsdFBhZ2UgZnJvbSAnLi9wYWdlcy9SZXN1bHRQYWdlJzsgLy8gVGhlIG5ldyBwYWdlIHRvIGRpc3BsYXkgdGhlIHJlc3BvbnNlXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lLz59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzcG9uc2VcIiBlbGVtZW50PXs8UmVzdWx0UGFnZS8+fSAvPlxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==