import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RollerCoaster', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 12.667V3.333m0 0A2.667 2.667 0 0 0 1.333 6v6.667M4 3.333c1.333 0 2.666.887 4 2.667 1.333 1.78 2.666 2.667 4 2.667m-5.334 4V4.533m2.667 8.134v-5.2M12 3.333V6m0 6.667v-4m0 0a2.666 2.666 0 1 0-2-4.434m4.666 8.434V6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
