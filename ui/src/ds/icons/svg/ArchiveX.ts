import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ArchiveX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 5.333v7.334A1.333 1.333 0 0 0 4 14h8a1.334 1.334 0 0 0 1.333-1.333V5.333m-7 6L9.666 8M6.333 8l3.333 3.333M2 2h12c.368 0 .666.298.666.667v2a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666v-2C1.333 2.298 1.631 2 2 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
