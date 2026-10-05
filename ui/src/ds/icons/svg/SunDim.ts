import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SunDim', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 2.667h.007M13.334 8h.006M8 13.333h.007M2.667 8h.007m9.098-3.771h.006m-.006 7.542h.006m-7.549 0h.007M4.229 4.23h.007M10.667 8a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
