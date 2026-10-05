import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('User', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.666 14v-1.333A2.667 2.667 0 0 0 10 10H6a2.667 2.667 0 0 0-2.667 2.667V14m7.333-9.333a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
