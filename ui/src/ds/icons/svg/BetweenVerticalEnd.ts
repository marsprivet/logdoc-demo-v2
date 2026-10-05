import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BetweenVerticalEnd', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 14.667 2-2 2 2M2.667 2H6c.368 0 .667.298.667.667V10a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 10V2.667C2 2.298 2.298 2 2.667 2ZM10 2h3.333c.368 0 .667.298.667.667V10a.667.667 0 0 1-.667.667H10A.667.667 0 0 1 9.333 10V2.667c0-.369.299-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
