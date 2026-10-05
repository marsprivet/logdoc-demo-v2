import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Save', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 14V9.333a.667.667 0 0 0-.666-.666H5.333a.667.667 0 0 0-.666.666V14m0-12v2.667a.667.667 0 0 0 .666.666H10M10.133 2c.352.005.688.149.934.4L13.6 4.933c.251.247.395.582.4.934v6.8A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h6.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
