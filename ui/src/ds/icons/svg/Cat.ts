import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cat', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 9.333v.334m5.334-.334v.334M8 3.333c.447 0 .9.06 1.333.174C10.52 2.173 12.687 1.613 13.613 2c.934.387-.28 4.667-.28 4.667.38.713.667 1.493.667 2.293C14 11.933 11.313 14 8 14s-6-2-6-5.04c0-.833.333-1.6.667-2.293 0 0-1.26-4.28-.334-4.667.927-.387 3.147.153 4.334 1.487.437-.1.884-.152 1.333-.154Zm-.5 7.5h1l-.5.5-.5-.5Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
