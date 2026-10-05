import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('IdCard', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 6.667H12m-1.334 2.666H12M4.113 10a2 2 0 0 1 3.773 0m-.553-2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm-4.667-4h10.667c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V4.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
