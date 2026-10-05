import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LightbulbOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#lightbulb-off_svg__a)",
		children: jsx("path", {
			d: "M11.2 7.467c.533-.6.8-1.334.8-2.134A4 4 0 0 0 5.8 2m-4.467-.667 13.333 13.334M4.2 4.2A3.113 3.113 0 0 0 5 7.667c.466.466.866 1 1 1.666M6 12h4m-3.334 2.667h2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "lightbulb-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
