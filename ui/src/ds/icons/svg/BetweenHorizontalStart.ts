import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BetweenHorizontalStart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m1.333 6 2 2-2 2M6 2h7.333c.368 0 .667.298.667.667V6a.667.667 0 0 1-.667.667H6A.667.667 0 0 1 5.333 6V2.667C5.333 2.298 5.631 2 6 2Zm0 7.333h7.333c.368 0 .667.299.667.667v3.333a.667.667 0 0 1-.667.667H6a.667.667 0 0 1-.667-.667V10c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
