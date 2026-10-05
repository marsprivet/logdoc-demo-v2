import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitPullRequestArrow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8m9.333-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V5.333A1.333 1.333 0 0 0 11.333 4H8m2 2L8 4m0 0 2-2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
