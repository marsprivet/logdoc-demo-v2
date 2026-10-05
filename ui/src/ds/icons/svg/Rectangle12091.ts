import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Rectangle12091', (l) =>
	jsxs("svg", {
	width: 6,
	height: 4,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("mask", {
		id: "rectangle-1209-1_svg__a",
		fill: "#fff",
		children: jsx("rect", {
			width: 6,
			height: 3.75,
			rx: .667
		})
	}), jsx("rect", {
		width: 6,
		height: 3.75,
		rx: .667,
		stroke: "inherit",
		strokeWidth: 2.667,
		mask: "url(#rectangle-1209-1_svg__a)"
	})]
}),
);
