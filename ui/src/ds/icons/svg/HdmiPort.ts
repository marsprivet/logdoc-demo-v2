import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HdmiPort', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5 8h6m3.666-2A.667.667 0 0 0 14 5.333H2A.667.667 0 0 0 1.333 6v2.667A.667.667 0 0 0 2 9.333h.666L4 10.667h8l1.333-1.334H14a.667.667 0 0 0 .666-.666V6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
