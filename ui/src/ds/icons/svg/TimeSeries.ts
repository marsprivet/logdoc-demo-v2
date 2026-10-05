import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TimeSeries', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#time-series_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M4.666 8a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0ZM4.2 9.2l2.6 2.6M9.666 13a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0ZM8 11.333V4.667M9.666 3a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0ZM11.8 6.8 9.2 4.2M14.666 8a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0Z" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "time-series_svg__a",
		children: jsx("path", {
			fill: "#fff",
			transform: "rotate(-90 8 8)",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
