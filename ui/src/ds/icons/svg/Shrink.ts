import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Shrink', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10 10 4 4m-4-4v3.2m0-3.2h3.2M6 13.2V10m0 0H2.8M6 10l-4 4m8-11.2V6m0 0h3.2M10 6l4-4m-8 .8V6m0 0H2.8M6 6 2 2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
