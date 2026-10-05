import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Truck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 12V4A1.333 1.333 0 0 0 8 2.667H2.666A1.333 1.333 0 0 0 1.333 4v7.333A.667.667 0 0 0 2 12h1.333m0 0A1.333 1.333 0 1 0 6 12m-2.667 0A1.333 1.333 0 1 1 6 12m4 0H6m4 0a1.333 1.333 0 1 0 2.666 0M10 12a1.333 1.333 0 1 1 2.666 0m0 0H14a.666.666 0 0 0 .666-.667V8.9a.667.667 0 0 0-.146-.416l-2.32-2.9a.667.667 0 0 0-.52-.25H9.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
