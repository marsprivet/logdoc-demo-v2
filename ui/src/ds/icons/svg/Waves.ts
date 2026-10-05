import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Waves', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 4c.4.333.8.667 1.667.667 1.666 0 1.666-1.334 3.333-1.334 1.733 0 1.6 1.334 3.333 1.334 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667M1.333 8c.4.333.8.667 1.667.667 1.666 0 1.666-1.334 3.333-1.334 1.733 0 1.6 1.334 3.333 1.334 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667M1.333 12c.4.333.8.667 1.667.667 1.666 0 1.666-1.334 3.333-1.334 1.733 0 1.6 1.334 3.333 1.334 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
