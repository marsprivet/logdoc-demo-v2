import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TypeOutline', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 11a.333.333 0 0 0 .333.333H10A1.333 1.333 0 0 1 10 14H6a1.333 1.333 0 0 1 0-2.667h.333A.333.333 0 0 0 6.666 11V5a.333.333 0 0 0-.333-.333h-2A.333.333 0 0 0 4 5v.333a1.333 1.333 0 1 1-2.667 0v-2A1.333 1.333 0 0 1 2.666 2h10.667a1.333 1.333 0 0 1 1.333 1.333v2a1.333 1.333 0 1 1-2.666 0V5a.333.333 0 0 0-.334-.333h-2A.333.333 0 0 0 9.333 5v6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
