import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('EqualNot', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6h9.333m-9.333 4h9.333m0-6.667-9.333 9.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
