import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Tag', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#tag_svg__a)",
		children: [
			jsx("path", {
				d: "M5 5.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666Z",
				fill: "#2A2E37"
			}),
			jsx("path", {
				d: "M8.39 1.724c-.25-.25-.589-.39-.942-.39H2.666a1.333 1.333 0 0 0-1.333 1.333v4.781c0 .354.14.693.39.943l5.803 5.802a1.617 1.617 0 0 0 2.28 0l4.387-4.386a1.617 1.617 0 0 0 0-2.28L8.39 1.724Z",
				stroke: "inherit",
				strokeWidth: 1.33,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M5 5.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666Z",
				stroke: "inherit",
				strokeWidth: 1.33,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "tag_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
