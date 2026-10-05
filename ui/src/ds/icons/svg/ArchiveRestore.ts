import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ArchiveRestore', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 5.333v7.334A1.333 1.333 0 0 0 4 14h1.333m8-8.667v7.334A1.334 1.334 0 0 1 12 14h-1.334M6 10l2-2m0 0 2 2M8 8v6M2 2h12c.368 0 .666.298.666.667v2a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666v-2C1.333 2.298 1.631 2 2 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
