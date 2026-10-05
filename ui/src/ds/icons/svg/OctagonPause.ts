import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('OctagonPause', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#octagon-pause_svg__a)",
		children: jsx("path", {
			d: "M6.666 10V6m2.667 4V6m-7.61 5.248c-.25-.25-.39-.59-.39-.943v-4.61c0-.354.14-.693.39-.943l3.029-3.028c.25-.25.589-.39.942-.39h4.611c.354 0 .693.14.943.39l3.028 3.028c.25.25.39.59.39.943v4.61c0 .354-.14.693-.39.943l-3.028 3.028c-.25.25-.59.39-.943.39h-4.61c-.354 0-.693-.14-.943-.39l-3.028-3.028Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "octagon-pause_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
