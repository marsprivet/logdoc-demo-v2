import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RotateCwSquare', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 3.333H4a1.333 1.333 0 0 0-1.333 1.334v2M8 3.333l-2 2m2-2-2-2m-3.333 8V12A1.333 1.333 0 0 0 4 13.333h8A1.333 1.333 0 0 0 13.334 12V4.667A1.333 1.333 0 0 0 12 3.333h-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
