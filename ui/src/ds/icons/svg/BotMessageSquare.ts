import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BotMessageSquare', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bot-message-square_svg__a)",
		children: jsx("path", {
			d: "M8 4V1.333H5.333M1.333 8h1.333M6 7.333v1.334m4-1.334v1.334M13.333 8h1.333m-9.333 4-2.667 2.667V5.333A1.333 1.333 0 0 1 4 4h8a1.333 1.333 0 0 1 1.333 1.333v5.334A1.333 1.333 0 0 1 12 12H5.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bot-message-square_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
