import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UserMinus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 14v-1.333A2.667 2.667 0 0 0 8 10H4a2.667 2.667 0 0 0-2.667 2.667V14m13.333-6.667h-4m-2-2.666a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
