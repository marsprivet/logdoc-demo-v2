import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MessageCircleCode', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 6.333 5.333 8l1.333 1.667m2.667-3.334L10.666 8 9.333 9.667m-4.067 3.666a6 6 0 1 0-2.6-2.6l-1.333 3.934 3.933-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
