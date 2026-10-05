import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Handshake', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m7.333 11.333 1.333 1.334a1.414 1.414 0 1 0 2-2M9.333 9.333 11 11a1.414 1.414 0 0 0 2-2l-2.587-2.587a2 2 0 0 0-2.827 0L7 7a1.414 1.414 0 1 1-2-2l1.873-1.873a3.86 3.86 0 0 1 4.707-.58l.313.186c.284.172.621.231.947.167L14 2.667M14 2l.666 7.333h-1.333M2 2l-.667 7.333 4.333 4.334a1.414 1.414 0 1 0 2-2M2 2.667h5.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
