import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MonitorCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 11.333V14m2.133-10.733L9.533 3m.6 1.733-.6.267m1.733-2.867-.266-.6m.266 4.334-.266.6m2-4.934-.267.6M13 6.467l-.267-.6M14.466 3l-.6.267m.6 1.733-.6-.267m.8 3.934V10a1.333 1.333 0 0 1-1.333 1.333H2.666A1.334 1.334 0 0 1 1.333 10V3.333A1.333 1.333 0 0 1 2.666 2h4.667m-2 12h5.333M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
