import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LampWallDown', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.334 8.667V5.333A1.333 1.333 0 0 0 8 4H5.334m2 4.667h4l2 4.666h-8l2-4.666ZM2.667 6H4a1.333 1.333 0 0 0 1.334-1.333V3.333A1.333 1.333 0 0 0 4 2H2.667v4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
