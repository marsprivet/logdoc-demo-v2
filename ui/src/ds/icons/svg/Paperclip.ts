import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Paperclip', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14.293 7.367-6.127 6.126a4.002 4.002 0 1 1-5.66-5.66L8.22 2.12A2.67 2.67 0 1 1 12 5.893l-5.727 5.714A1.334 1.334 0 0 1 4.386 9.72l5.66-5.653",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
