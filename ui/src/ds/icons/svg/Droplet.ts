import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Droplet', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 14.667A4.667 4.667 0 0 0 12.666 10c0-1.333-.666-2.6-2-3.667C9.333 5.267 8.333 3.667 8 2c-.334 1.667-1.334 3.267-2.667 4.333C4 7.4 3.333 8.667 3.333 10A4.666 4.666 0 0 0 8 14.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
