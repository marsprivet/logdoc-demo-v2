import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CookingPot', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cooking-pot_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h13.333m-1.333 0v5.333A1.334 1.334 0 0 1 12 14.667H4a1.333 1.333 0 0 1-1.334-1.334V8m0-2.667 10.667-2.666M5.906 4.52l-.3-1.207a1.333 1.333 0 0 1 .967-1.62l1.293-.32a1.334 1.334 0 0 1 1.62.974l.3 1.2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cooking-pot_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
