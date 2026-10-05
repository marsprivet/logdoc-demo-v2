import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('StepBack', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 13.333V2.667M9.334 13.333 2.667 8l6.667-5.333v10.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
