import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Github', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 14.667V12a3.2 3.2 0 0 0-.667-2.333c2 0 4-1.334 4-3.667a3.602 3.602 0 0 0-.667-2.333 4.93 4.93 0 0 0 0-2.334s-.666 0-2 1a14.347 14.347 0 0 0-5.333 0c-1.333-1-2-1-2-1-.2.767-.2 1.567 0 2.334A3.602 3.602 0 0 0 2.666 6c0 2.333 2 3.667 4 3.667A3.143 3.143 0 0 0 6 12m0 0v2.667M6 12c-3.007 1.333-3.334-1.333-4.667-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
