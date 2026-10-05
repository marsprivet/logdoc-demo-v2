import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Route', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 12.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5.667a2.333 2.333 0 0 0 0-4.667H4.333a2.333 2.333 0 1 1 0-4.667H10m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
