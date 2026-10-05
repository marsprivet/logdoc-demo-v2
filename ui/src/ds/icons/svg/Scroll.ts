import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Scroll', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.666 11.333v-8A1.333 1.333 0 0 0 11.333 2H2.666m0 0A1.333 1.333 0 0 1 4 3.333v9.334A1.333 1.333 0 0 0 5.333 14M2.666 2a1.333 1.333 0 0 0-1.333 1.333v1.334A.667.667 0 0 0 2 5.333h2M5.333 14h8a1.333 1.333 0 0 0 1.333-1.333V12a.667.667 0 0 0-.666-.667H7.333a.667.667 0 0 0-.667.667v.667A1.333 1.333 0 0 1 5.333 14Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
