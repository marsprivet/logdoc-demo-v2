import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MessagesSquare', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#messages-square_svg__a)",
		children: jsx("path", {
			d: "M12 6h1.333a1.333 1.333 0 0 1 1.333 1.333v7.334L12 12H8a1.333 1.333 0 0 1-1.334-1.333V10m2.667-4A1.333 1.333 0 0 1 8 7.333H4L1.333 10V2.667c0-.734.6-1.334 1.333-1.334H8a1.333 1.333 0 0 1 1.333 1.334V6Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "messages-square_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
