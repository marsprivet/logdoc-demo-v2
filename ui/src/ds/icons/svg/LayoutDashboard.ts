import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LayoutDashboard', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 2H2.667A.667.667 0 0 0 2 2.667v4.666c0 .369.298.667.667.667H6a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 6 2ZM13.333 2H10a.667.667 0 0 0-.667.667v2c0 .368.299.666.667.666h3.333A.667.667 0 0 0 14 4.667v-2A.667.667 0 0 0 13.333 2ZM13.333 8H10a.667.667 0 0 0-.667.667v4.666c0 .368.299.667.667.667h3.333a.667.667 0 0 0 .667-.667V8.667A.667.667 0 0 0 13.333 8ZM6 10.667H2.667a.667.667 0 0 0-.667.666v2c0 .368.298.667.667.667H6a.667.667 0 0 0 .667-.667v-2A.667.667 0 0 0 6 10.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
