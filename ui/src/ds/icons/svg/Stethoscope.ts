import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Stethoscope', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#stethoscope_svg__a)",
		children: jsx("path", {
			d: "M3.2 1.533a.2.2 0 1 0 .133-.2h-.667a1.333 1.333 0 0 0-1.333 1.334V6a4 4 0 0 0 4 4m0 0a4 4 0 0 0 4-4V2.667A1.333 1.333 0 0 0 8 1.333h-.667a.141.141 0 1 0 .2.2M5.333 10v.667a4 4 0 0 0 8 0V8m0 0a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "stethoscope_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
