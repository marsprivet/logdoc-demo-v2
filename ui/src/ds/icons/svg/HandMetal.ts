import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HandMetal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 8.333V6.667a1.333 1.333 0 1 0-2.667 0V7.6m0-.267V6a1.333 1.333 0 0 0-2.667 0v1.333m0-.333V3.333a1.333 1.333 0 0 0-2.666 0v6m.666.667L3.493 8.827a1.333 1.333 0 0 0-1.887 1.88l2.4 2.4c.994.986 2.127 1.56 3.994 1.56h1.333a5.333 5.333 0 0 0 5.333-5.334V4.667a1.334 1.334 0 0 0-2.666 0V8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
