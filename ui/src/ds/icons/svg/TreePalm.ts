import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TreePalm', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 5.333H4l-.667-.666-.667.666H1.333C1.333 3.493 2.973 2 5 2c2.026 0 3.666 1.493 3.666 3.333.334 1.334 2 5.667.667 9.334H6.666c.554-1.334 1-2.667.667-4.334M8.666 4.76A3.88 3.88 0 0 1 11 4c2.026 0 3.666 1.493 3.666 3.333h-2L12 6.667l-.667.666h-2m-5.407-.86c-1.433 1.434-1.533 3.647-.233 4.954L6.52 8.593 8.873 6.24c-1.3-1.307-3.513-1.2-4.947.233Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
