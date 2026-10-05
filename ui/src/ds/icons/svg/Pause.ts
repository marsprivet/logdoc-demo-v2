import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Pause', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 2.667H10a.667.667 0 0 0-.667.666v9.334c0 .368.299.666.667.666h1.333a.667.667 0 0 0 .667-.666V3.333a.667.667 0 0 0-.667-.666ZM6 2.667H4.667A.667.667 0 0 0 4 3.333v9.334c0 .368.298.666.667.666H6a.667.667 0 0 0 .667-.666V3.333A.667.667 0 0 0 6 2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
