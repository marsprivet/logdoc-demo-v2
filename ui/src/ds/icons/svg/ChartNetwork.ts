import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ChartNetwork', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m8.74 5.11 1.187 1.78M9.44 8.526l-2.216.95m6.108-6.808-4.04 1.01M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M9.333 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0ZM12 8a1.333 1.333 0 1 1-2.667 0A1.333 1.333 0 0 1 12 8Zm-4.667 2a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
