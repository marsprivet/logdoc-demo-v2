import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidAlertCircle', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#solid-alert-circle_svg__a)",
		children: jsx("path", {
			d: "M8 .666a7.334 7.334 0 1 1-.002 14.668A7.334 7.334 0 0 1 8 .666ZM8 10a.667.667 0 0 0 0 1.334h.007a.667.667 0 0 0 0-1.334H8Zm0-5.334a.668.668 0 0 0-.667.667V8a.667.667 0 0 0 1.334 0V5.333A.668.668 0 0 0 8 4.666Z",
			fill: "#fff"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-alert-circle_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
