import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ChartArea', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M4.667 7.471c0-.088.035-.173.097-.235l1.333-1.333a.333.333 0 0 1 .472 0l2.195 2.194a.333.333 0 0 0 .472 0l2.861-2.861a.333.333 0 0 1 .57.235v5.196a.667.667 0 0 1-.667.666H5.333a.667.667 0 0 1-.666-.666V7.47Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
