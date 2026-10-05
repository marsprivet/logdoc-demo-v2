import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Flashlight', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.667 8a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
		fill: "#2A2E37"
	})
}),
);
