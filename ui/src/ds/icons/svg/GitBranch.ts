import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitBranch', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 2v8m0 0a2 2 0 1 0 2 2m-2-2a2 2 0 0 1 2 2m6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a6 6 0 0 1-6 6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
