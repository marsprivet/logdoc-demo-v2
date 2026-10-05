import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitPullRequestCreateArrow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8M10 6 8 4m0 0 2-2M8 4h3.333a1.333 1.333 0 0 1 1.333 1.333v2m0 2.667v4m2-2h-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
