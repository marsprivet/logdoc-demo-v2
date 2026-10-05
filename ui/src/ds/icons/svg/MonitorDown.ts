import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MonitorDown', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8.667v-4m0 4 2-2m-2 2-2-2m2 4.666V14m-2.667 0h5.333m-8-12h10.667c.736 0 1.333.597 1.333 1.333V10c0 .736-.597 1.333-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 10V3.333C1.333 2.597 1.93 2 2.666 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
