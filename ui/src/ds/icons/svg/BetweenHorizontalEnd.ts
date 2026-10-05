import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BetweenHorizontalEnd', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14.667 10-2-2 2-2m-12-4H10c.368 0 .667.298.667.667V6a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 6V2.667C2 2.298 2.298 2 2.667 2Zm0 7.333H10c.368 0 .667.299.667.667v3.333A.667.667 0 0 1 10 14H2.667A.667.667 0 0 1 2 13.333V10c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
