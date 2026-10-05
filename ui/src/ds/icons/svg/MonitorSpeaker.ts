import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MonitorSpeaker', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.666 13.333h1.667m6-7.333h.007M5.333 4H2.666a1.333 1.333 0 0 0-1.333 1.333v4a1.333 1.333 0 0 0 1.333 1.334h2.667m4-8h4c.736 0 1.333.597 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333h-4A1.333 1.333 0 0 1 8 12V4c0-.736.597-1.333 1.333-1.333ZM12 10a.667.667 0 1 1-1.334 0A.667.667 0 0 1 12 10Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
