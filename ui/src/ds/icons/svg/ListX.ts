import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ListX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 8H2m8.667-4H2m8.667 8H2m10.667-5.333L10 9.333m0-2.666 2.667 2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
