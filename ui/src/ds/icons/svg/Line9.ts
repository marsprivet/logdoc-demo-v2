import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Line9', (c) =>
	jsx("svg", {
	width: 2,
	height: 3,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.858 0v3",
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
