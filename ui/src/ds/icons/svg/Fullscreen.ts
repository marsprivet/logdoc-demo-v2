import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Fullscreen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 4.667V3.333A1.333 1.333 0 0 1 3.333 2h1.334m6.666 0h1.334A1.333 1.333 0 0 1 14 3.333v1.334m0 6.666v1.334A1.334 1.334 0 0 1 12.667 14h-1.334m-6.666 0H3.333A1.334 1.334 0 0 1 2 12.667v-1.334m3.333-6h5.334c.368 0 .666.299.666.667v4a.667.667 0 0 1-.666.667H5.333A.667.667 0 0 1 4.667 10V6c0-.368.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
