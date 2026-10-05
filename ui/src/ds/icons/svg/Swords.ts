import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Swords', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.667 11.667 2 4V2h2l7.667 7.667m-3 3 4-4m-2 2 2.666 2.666m-.666.667L14 12.667M9.667 4.333 12 2h2v2l-2.333 2.333m-8.334 3L6 12m-1.333-.667-2 2M2 12.667 3.333 14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
