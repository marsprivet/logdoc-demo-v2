import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HandHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 9.333h1.333a1.333 1.333 0 1 0 0-2.666h-2c-.4 0-.733.133-.933.4L2 10.667m2.666 2.666 1.067-.933c.2-.267.533-.4.933-.4h2.667c.733 0 1.4-.267 1.867-.8l3.066-2.933a1.334 1.334 0 1 0-1.833-1.94l-2.8 2.6M1.333 10l4 4M13 5.667c.466-.467 1-1.067 1-1.8a1.82 1.82 0 0 0-3.334-1.2 1.853 1.853 0 0 0-3.333 1.2c0 .8.533 1.333 1 1.866L10.666 8 13 5.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
