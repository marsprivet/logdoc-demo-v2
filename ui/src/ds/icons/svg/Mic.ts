import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Mic', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.666 6.667V8A4.666 4.666 0 0 1 8 12.667m0 0A4.667 4.667 0 0 1 3.333 8V6.667m4.667 6v2M8 1.333a2 2 0 0 0-2 2V8a2 2 0 0 0 4 0V3.333a2 2 0 0 0-2-2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
