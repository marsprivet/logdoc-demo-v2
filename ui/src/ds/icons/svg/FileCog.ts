import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 1.333V4a1.333 1.333 0 0 0 1.333 1.333h2.667M2.133 8.6l-.6-.267m.6 1.734-.6.266m1.585 4c.242.214.553.332.875.334H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.333 1.334v1.666m.6 3.134L3 6.867m.267 4.333L3 11.8m2-4.933-.267.6M5 11.8l-.267-.6m1.734-2.867-.6.267m.6 1.733-.6-.266M6 9.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
