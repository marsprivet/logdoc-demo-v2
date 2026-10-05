import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Contact', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 12A1.333 1.333 0 0 0 10 10.667H6A1.333 1.333 0 0 0 4.667 12m.666-10.667v1.334m5.334-1.334v1.334m-7.334 0h9.334C13.403 2.667 14 3.264 14 4v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 0 1 2 13.333V4c0-.736.597-1.333 1.333-1.333Zm6 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
