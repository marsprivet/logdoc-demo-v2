import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FireExtinguisher', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 4.333V2m0 0a.667.667 0 0 0-.667-.667H8A.667.667 0 0 0 7.333 2M10 2h2M7.333 2v2.333m0-2.333a4 4 0 0 0-4 4v7.333M6 12h5.333m-8-3.333H6m5.333-2a2.667 2.667 0 1 0-5.333 0v6.666a1.333 1.333 0 0 0 1.333 1.334H10a1.333 1.333 0 0 0 1.333-1.334V6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
