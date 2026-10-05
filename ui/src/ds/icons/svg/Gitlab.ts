import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Gitlab', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14.666 8.86-2.22-6.667a.281.281 0 0 0-.093-.12.253.253 0 0 0-.147-.073.26.26 0 0 0-.246.167l-1.507 4.446H5.546l-1.48-4.44A.28.28 0 0 0 4 2.053.253.253 0 0 0 3.826 2a.26.26 0 0 0-.246.167L1.333 8.86a.493.493 0 0 0 .18.553L8 14l6.46-4.587a.474.474 0 0 0 .206-.553Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
