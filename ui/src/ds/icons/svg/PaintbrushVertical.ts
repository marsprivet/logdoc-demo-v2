import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PaintbrushVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 1.333v1.334m2.667-1.334V4M12 8V2a.667.667 0 0 0-.667-.667H4.666A.667.667 0 0 0 4 2v6m8 0H4m8 0a.667.667 0 0 1 .666.667v.666a1.333 1.333 0 0 1-1.333 1.334H10a.667.667 0 0 0-.667.666v1.934a1.333 1.333 0 0 1-2.667 0v-1.934A.667.667 0 0 0 6 10.667H4.666a1.333 1.333 0 0 1-1.333-1.334v-.666A.667.667 0 0 1 4 8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
