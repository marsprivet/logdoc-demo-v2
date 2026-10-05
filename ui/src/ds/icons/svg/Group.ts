import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Group', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 4.667V3.333C2 2.6 2.6 2 3.333 2h1.334m6.666 0h1.334C13.4 2 14 2.6 14 3.333v1.334m0 6.666v1.334C14 13.4 13.4 14 12.667 14h-1.334m-6.666 0H3.333C2.6 14 2 13.4 2 12.667v-1.334m3.333-6.666h3.334c.368 0 .666.298.666.666v2A.667.667 0 0 1 8.667 8H5.333a.667.667 0 0 1-.666-.667v-2c0-.368.298-.666.666-.666Zm2 3.333h3.334c.368 0 .666.298.666.667v2a.667.667 0 0 1-.666.666H7.333a.667.667 0 0 1-.666-.666v-2c0-.369.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
