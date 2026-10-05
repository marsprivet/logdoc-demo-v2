import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cctv', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.166 8h2.422a.667.667 0 0 1 .596.965l-1.356 2.712a.667.667 0 0 1-1.139.09l-1.416-1.98m-8.94 2.88H3.84a1.333 1.333 0 0 0 1.2-.734L6 10m-4.667 4v-2.667M4.666 6h.007m6.73.035a.667.667 0 0 1 .299.894L9.63 11.07a.667.667 0 0 1-.895.299L2.406 8.2a1.947 1.947 0 0 1-.866-2.607l.92-1.86a1.947 1.947 0 0 1 2.613-.866l6.33 3.168Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
