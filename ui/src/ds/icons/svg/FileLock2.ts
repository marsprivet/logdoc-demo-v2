import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileLock2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v.666m6.667-2V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-8 3.334V7.333a1.333 1.333 0 0 0-2.667 0v1.334m-.666 0h4c.368 0 .666.298.666.666v2A.667.667 0 0 1 6 12H2a.667.667 0 0 1-.667-.667v-2c0-.368.298-.666.667-.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
