import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Stamp', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.334 14.667h9.333m-3.333-6v-3c0-1 .666-1 .666-2.334a2 2 0 0 0-2-2c-1.106 0-2 .667-2 2 0 1.334.667 1.334.667 2.334v3m6.18.486a1.667 1.667 0 0 0-1.18-.486H4.334a1.667 1.667 0 0 0-1.667 1.666v1a.667.667 0 0 0 .667.667h9.333a.666.666 0 0 0 .667-.667v-1c0-.44-.174-.866-.487-1.18Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
