import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Slack', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#slack_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M10.666 2.333a1 1 0 1 0-2 0v3.334a1 1 0 0 0 2 0V2.333ZM12.666 5.667v1h1a1 1 0 1 0-1-1ZM7.333 10.333a1 1 0 0 0-2 0v3.334a1 1 0 0 0 2 0v-3.334ZM3.333 10.333v-1h-1a1 1 0 1 0 1 1ZM13.666 8.667h-3.333a1 1 0 0 0 0 2h3.333a1 1 0 1 0 0-2ZM10.333 12.667h-1v1a1 1 0 1 0 1-1ZM5.666 5.333H2.333a1 1 0 1 0 0 2h3.333a1 1 0 1 0 0-2ZM5.666 3.333h1v-1a1 1 0 1 0-1 1Z" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "slack_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
