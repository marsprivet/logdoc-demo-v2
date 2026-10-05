import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SunMedium', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 2v.667m0 10.666V14M2 8h.667m10.666 0H14m-1.757-4.243-.472.472M4.23 11.77l-.472.472m0-8.486.472.472m7.542 7.542.472.472M10.667 8a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
