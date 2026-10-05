import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Key', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10.333 5 1.533 1.533a.667.667 0 0 0 .934 0l1.4-1.4a.667.667 0 0 0 0-.933l-1.534-1.533M14 1.333l-6.4 6.4m1.066 2.6a3.667 3.667 0 1 1-7.333 0 3.667 3.667 0 0 1 7.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
