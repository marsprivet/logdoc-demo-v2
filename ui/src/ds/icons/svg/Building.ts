import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Building', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 14.667V12h4v2.667M5.334 4h.006m5.327 0h.007M8 4h.007M8 6.667h.007M8 9.333h.007m2.66-2.666h.007m-.007 2.666h.007m-5.34-2.666h.006m-.006 2.666h.006m-1.34-8h8c.737 0 1.334.597 1.334 1.334v10.666c0 .737-.597 1.334-1.334 1.334H4a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
