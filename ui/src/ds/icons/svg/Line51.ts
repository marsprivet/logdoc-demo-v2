import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Line51', (c) =>
	jsx("svg", {
	width: 2,
	height: 9,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.667 0v9",
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
