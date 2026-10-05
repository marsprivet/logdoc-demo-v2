import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Frame1', (c) =>
	jsx("svg", {
	width: 5,
	height: 7,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.7 6.3V3.5M4.2 6.3V3.5M.7.7h.007M4.2.7h.007",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
