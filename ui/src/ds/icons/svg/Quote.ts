import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Quote', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 2a1.333 1.333 0 0 0-1.334 1.333v4a1.333 1.333 0 0 0 1.334 1.334.667.667 0 0 1 .666.666V10A1.333 1.333 0 0 1 10 11.333a.667.667 0 0 0-.667.667v1.333A.667.667 0 0 0 10 14a4 4 0 0 0 4-4V3.333A1.334 1.334 0 0 0 12.667 2h-2ZM3.333 2A1.333 1.333 0 0 0 2 3.333v4a1.333 1.333 0 0 0 1.333 1.334.667.667 0 0 1 .667.666V10a1.333 1.333 0 0 1-1.333 1.333A.667.667 0 0 0 2 12v1.333a.667.667 0 0 0 .667.667 4 4 0 0 0 4-4V3.333A1.333 1.333 0 0 0 5.333 2h-2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
