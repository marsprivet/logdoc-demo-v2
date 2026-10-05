import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Component', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#component_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M3.666 5.667 6 8l-2.334 2.333L1.333 8l2.333-2.333ZM8 1.333l2.333 2.334L8 6 5.666 3.667 8 1.333ZM12.333 5.667 14.666 8l-2.333 2.333L10 8l2.333-2.333ZM8 10l2.333 2.333L8 14.667l-2.334-2.334L8 10Z" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "component_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
