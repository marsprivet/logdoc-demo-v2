import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPinXInside', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.667 5 6.334 8.333m0-3.333 3.333 3.333m3.667-1.666c0 3.328-3.693 6.795-4.933 7.866a.667.667 0 0 1-.801 0c-1.24-1.071-4.933-4.538-4.933-7.866a5.333 5.333 0 0 1 10.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
