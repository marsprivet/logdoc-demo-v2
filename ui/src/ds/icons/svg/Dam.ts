import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Dam', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 7.54c.78.373 1.027 1.127 2.333 1.127 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667m-6.833 4c.233.333.967.667 1.833.667 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667M1.333 6.667H4M1.333 9.333H4M1.333 12H4M1.333 4H4m.666-2A.667.667 0 0 0 4 2.667v10.666a.667.667 0 0 0 .666.667h2.667A.666.666 0 0 0 8 13.333L6.666 2.667A.667.667 0 0 0 6 2H4.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
