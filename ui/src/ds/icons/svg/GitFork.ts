import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitFork', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v1.333c0 .4.267.667.667.667h6.666c.4 0 .667-.267.667-.667V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
