import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TextCursorInput', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 2.667H4a2 2 0 0 1 2 2m0 0a2 2 0 0 1 2-2h.666M6 4.667v6.666m2.666 2H8a2 2 0 0 1-2-2m0 0a2 2 0 0 1-2 2h-.667m0-2.666h-.667a1.333 1.333 0 0 1-1.333-1.334V6.667a1.333 1.333 0 0 1 1.333-1.334h.667m5.333 0h4.667a1.333 1.333 0 0 1 1.333 1.334v2.666a1.333 1.333 0 0 1-1.333 1.334H8.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
