import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Bird', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 4.667h.007M2.266 12H8a5.333 5.333 0 0 0 5.333-5.333v-2m0 0A2.666 2.666 0 0 0 8.48 3.133l-7.147 10.2m12-8.666L14.666 5l-1.333.333M6.666 12v2m2.667-2.167V14m-4.667-2a4 4 0 0 0 2.56-7.073",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
