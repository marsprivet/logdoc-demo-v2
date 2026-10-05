import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Haze', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m3.466 4.133.934.934m-3.067 3.6h1.333m10.667 0h1.333m-3.066-3.6.933-.934m2.133 7.2H1.333M14.666 14H1.333m9.333-5.333a2.667 2.667 0 1 0-5.333 0M8 3.333V1.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
