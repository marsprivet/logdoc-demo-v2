import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Construction', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 9.333V14M4.666 9.333V14m6.667-12v2M4.666 2v2m2 5.333L1.533 4.2m7.8-.2 5.133 5.133M5.333 4l5.333 5.333M2 4h12c.368 0 .666.298.666.667v4a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666v-4C1.333 4.298 1.631 4 2 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
