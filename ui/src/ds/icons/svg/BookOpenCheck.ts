import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BookOpenCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 14c0-1.133-.867-2-2-2H1.333V2h4C6.8 2 8 3.2 8 4.667M8 14V4.667M8 14c0-1.133.866-2 2-2h4.666v-1.533M8 4.667C8 3.2 9.2 2 10.666 2h4v2m-4 4L12 9.333l2.666-2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
