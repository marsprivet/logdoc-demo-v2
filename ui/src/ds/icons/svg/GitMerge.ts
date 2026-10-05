import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitMerge', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0a6 6 0 0 1-6-6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
