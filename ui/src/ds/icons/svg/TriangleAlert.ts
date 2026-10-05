import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TriangleAlert', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 6v2.667m0 2.666h.007m6.48.667L9.153 2.667a1.333 1.333 0 0 0-2.32 0L1.5 12a1.333 1.333 0 0 0 1.167 2h10.666a1.333 1.333 0 0 0 1.154-2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
