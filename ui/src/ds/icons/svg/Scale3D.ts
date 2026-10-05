import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Scale3D', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 12.667a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Zm0 0h-8m0-8a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Zm0 0v8m0 0 4-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
