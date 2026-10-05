import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Line5', (c) =>
	jsx("svg", {
	width: 2,
	height: 5,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.715 0v5",
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
