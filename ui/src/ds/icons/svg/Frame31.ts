import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Frame31', (c) =>
	jsx("svg", {
	width: 7,
	height: 7,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.7 6.294V3.497M3.497 6.294V3.497M6.294 6.294V3.497M.7.7h.007M3.497.7h.007M6.294.7h.007",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
