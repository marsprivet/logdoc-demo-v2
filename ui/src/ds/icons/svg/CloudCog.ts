import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.8 10.067a4.666 4.666 0 1 1 7.673-4.734h1.193a3 3 0 0 1 1.667 5.467m-2.867 1.467-.6-.2M6.133 10.6l-.6-.2m1.533 3.4.2-.6m1.467-3.733.2-.6m.133 4.933-.266-.667m-1.6-3.6-.267-.666m-1.4 3.533.667-.267m3.6-1.6.666-.266M10 11.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
