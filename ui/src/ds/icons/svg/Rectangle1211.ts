import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Rectangle1211', (c) =>
	jsx("svg", {
	width: 10,
	height: 7,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.7 4.9a4.2 4.2 0 1 1 8.4 0v1.185a.215.215 0 0 1-.215.215H.915A.215.215 0 0 1 .7 6.085V4.9Z",
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
