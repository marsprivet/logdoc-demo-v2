import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudRainWind', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 9.933a4.667 4.667 0 1 1 7.806-4.6h1.194a3 3 0 0 1 1.666 5.495m-7.2 3.839 2-4.667M6 8.667l-2 4.666m7.333-4.666-2 4.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
