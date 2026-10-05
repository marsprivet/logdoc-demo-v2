import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ChartPie', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#chart-pie_svg__a)",
		children: jsx("path", {
			d: "M14.14 10.593a6.666 6.666 0 1 1-8.807-8.706M14 8c.368 0 .67-.3.633-.665a6.667 6.667 0 0 0-5.968-5.968c-.367-.036-.666.266-.666.634v5.333a.667.667 0 0 0 .667.667L14 8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "chart-pie_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
