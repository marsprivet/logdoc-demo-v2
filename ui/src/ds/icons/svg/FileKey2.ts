import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileKey2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v4m6.667-5.334V4a1.333 1.333 0 0 0 1.333 1.333h2.667M6.666 6.667l-3 3M6 7.333 6.666 8M4 10.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
