import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TreeDeciduous', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 12.667v2m-2.666-2a2.667 2.667 0 0 1-1.494-4.88A2.333 2.333 0 0 1 6 4.02V4a2 2 0 1 1 4 0v.027a2.333 2.333 0 0 1 2.16 3.766 2.667 2.667 0 0 1-1.493 4.874H5.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
