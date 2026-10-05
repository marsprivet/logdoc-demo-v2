import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TextSearch', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 4H2m4.667 4H2m4.667 4H2m12 .667L12.733 11.4m.6-1.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
