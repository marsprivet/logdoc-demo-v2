import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ScanQrCode', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 8v2.667a.667.667 0 0 1-.666.666H8M11.333 2h1.334A1.333 1.333 0 0 1 14 3.333v1.334m-2.667.666v-.666M14 11.333v1.334A1.334 1.334 0 0 1 12.667 14h-1.334M2 4.667V3.333A1.333 1.333 0 0 1 3.333 2h1.334m0 9.333h.006M4.667 14H3.333A1.334 1.334 0 0 1 2 12.667v-1.334m3.333-6.666h2c.369 0 .667.298.667.666v2A.667.667 0 0 1 7.333 8h-2a.667.667 0 0 1-.666-.667v-2c0-.368.298-.666.666-.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
