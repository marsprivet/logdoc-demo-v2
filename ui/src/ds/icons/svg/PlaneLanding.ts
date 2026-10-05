import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PlaneLanding', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14.667h13.333M2.513 7.18 1.333 6l1.333-3 .734.367c.366.186.6.56.6.966 0 .407.233.78.6.967l.733.367 2-4 .7.353a1.333 1.333 0 0 1 .727 1.013l.48 3.6a1.333 1.333 0 0 0 .726 1.014L12.9 9.113c.28.147.52.367.673.64l.4.687a.944.944 0 0 1-.707 1.4l-.786.1a1.547 1.547 0 0 1-.914-.16L2.86 7.433a1.333 1.333 0 0 1-.347-.253Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
