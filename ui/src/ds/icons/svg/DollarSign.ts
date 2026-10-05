import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DollarSign', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 1.333v13.334m3.333-11.334h-5a2.333 2.333 0 0 0 0 4.667h3.334a2.333 2.333 0 0 1 0 4.667H4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
