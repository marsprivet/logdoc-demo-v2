import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPinMinus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.652 9.333c.415-.866.682-1.771.682-2.666a5.333 5.333 0 1 0-10.667 0c0 3.328 3.693 6.795 4.933 7.866a.667.667 0 0 0 .801 0c.186-.161.37-.325.55-.492M10.666 12h4M10 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
