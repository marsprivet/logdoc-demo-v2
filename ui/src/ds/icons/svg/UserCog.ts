import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UserCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 10H4a2.667 2.667 0 0 0-2.667 2.667V14m13.133-3.067-.6-.2m-3.733-1.466-.6-.2m1.533 3.4.2-.6m1.467-3.734.2-.6m.133 4.934L12.8 11.8m-1.6-3.6-.267-.667m-1.4 3.534.667-.267m3.6-1.6.666-.267M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8.666 4.667a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
