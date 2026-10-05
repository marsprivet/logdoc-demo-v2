import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BotOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bot-off_svg__a)",
		children: jsx("path", {
			d: "M9.113 5.333H12a1.333 1.333 0 0 1 1.333 1.334v2.886m-12-.22h1.333m10.667 0h1.333m0 5.334L1.333 1.333m4 4H4a1.333 1.333 0 0 0-1.334 1.334V12A1.333 1.333 0 0 0 4 13.333h8c.353 0 .692-.14.942-.39M6 8.667V10m.446-7.333H8V4.22",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bot-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
