import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GlassWater', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 8a3.333 3.333 0 0 1 4 0 3.333 3.333 0 0 0 4 0m-1.867 6.667H5.866a1.334 1.334 0 0 1-1.333-1.194L3.333 2h9.333L11.46 13.473a1.333 1.333 0 0 1-1.327 1.194Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
