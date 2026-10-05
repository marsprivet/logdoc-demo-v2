import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CalendarCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10.133 11.267-.6-.267m.6 1.733-.6.267m1.134-11.667V4m.6 6.133-.267-.6m.267 4.334-.267.6m2-4.934-.267.6M13 14.467l-.267-.6M14 7V4a1.334 1.334 0 0 0-1.333-1.333H3.333A1.333 1.333 0 0 0 2 4v9.333a1.333 1.333 0 0 0 1.333 1.334h4M14.467 11l-.6.267m.6 1.733-.6-.267M2 6.667h12M5.333 1.333V4M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
