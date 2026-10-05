import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RefreshCwOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#refresh-cw-off_svg__a)",
		children: jsx("path", {
			d: "m14 5.333-1.507-1.506A6.5 6.5 0 0 0 8 2c-.667 0-1.314.107-1.914.313M14 5.333V2m0 3.333h-3.334m-5.333 5.334H2m0 0V14m0-3.333 1.506 1.506A6.5 6.5 0 0 0 8 14a5.93 5.93 0 0 0 4.24-1.76M2 8c0-1.66.666-3.16 1.76-4.24M14 8c0 .667-.107 1.313-.314 1.913m.98 4.754L1.333 1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "refresh-cw-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
