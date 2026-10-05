import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MonitorOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#monitor-off_svg__a)",
		children: jsx("path", {
			d: "M11.333 11.333H2.666A1.333 1.333 0 0 1 1.333 10V3.333C1.333 2.333 2 2 2 2m12.666 8V3.333A1.333 1.333 0 0 0 13.333 2H6m-.667 12h5.333M8 11.333V14M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "monitor-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
