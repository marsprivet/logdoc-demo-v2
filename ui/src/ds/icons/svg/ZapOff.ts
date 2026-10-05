import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ZapOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#zap-off_svg__a)",
		children: jsx("path", {
			d: "m7.008 3.237 1.738-1.79a.333.333 0 0 1 .574.306l-.918 2.878m2.035 2.036h2.896a.666.666 0 0 1 .52 1.086l-1.147 1.182m-1.858 1.914-3.595 3.704a.333.333 0 0 1-.573-.306l1.28-4.014a.666.666 0 0 0-.627-.9H2.666a.667.667 0 0 1-.52-1.086L5.151 5.15M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "zap-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
