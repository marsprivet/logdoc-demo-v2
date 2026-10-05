import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('StepForward', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 2.667v10.666M6.667 2.667 13.333 8l-6.666 5.333V2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
