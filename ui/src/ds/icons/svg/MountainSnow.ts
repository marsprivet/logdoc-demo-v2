import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MountainSnow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.76 10.053c1.746-1.046 3.493-.953 5.24.28 1.826 1.294 3.66 1.334 5.486.127M5.333 2 8 7.333 11.333 4l3.333 10H1.333l4-12Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
