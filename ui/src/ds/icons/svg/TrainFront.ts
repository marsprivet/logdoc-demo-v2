import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TrainFront', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 2.067v2.6a2.667 2.667 0 1 0 5.333 0v-2.6M6 10l-.666-.667M10 10l.667-.667m-5.333 3.334-1.334 2m6.667-2 1.333 2m-6-2a3.301 3.301 0 0 1-3.333-3.334V6.667a5.333 5.333 0 0 1 10.667 0v2.666A3.301 3.301 0 0 1 10 12.667H6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
