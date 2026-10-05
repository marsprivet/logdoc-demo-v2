import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Projector', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 4.667 2 3.333M6 4V2m2.666 2.667L10 3.333M7.886 8h5.447a1.333 1.333 0 0 1 1.333 1.333V12a1.333 1.333 0 0 1-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V9.333A1.333 1.333 0 0 1 2.666 8h1.447m6.553 2.667H12m-4-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
