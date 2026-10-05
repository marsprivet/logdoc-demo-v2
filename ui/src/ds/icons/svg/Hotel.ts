import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Hotel', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 14.667v-4.38M8 7.333h.007M8 4.667h.007m1.327 5.62v4.38m.666-4a3.333 3.333 0 0 0-4 0m4.667-3.334h.007m-.007-2.666h.007m-5.34 2.666h.006m-.006-2.666h.006M4 1.333h8c.737 0 1.334.597 1.334 1.334v10.666c0 .737-.597 1.334-1.334 1.334H4a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
