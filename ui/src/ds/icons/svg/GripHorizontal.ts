import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GripHorizontal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 6.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 6.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.334 6.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 10.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 10.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.334 10.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
