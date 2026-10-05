import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RectangleVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 1.333H5.333C4.597 1.333 4 1.93 4 2.667v10.666c0 .737.597 1.334 1.333 1.334h5.334c.736 0 1.333-.597 1.333-1.334V2.667c0-.737-.597-1.334-1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
