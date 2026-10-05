import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('QrCode', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 10.667h-2A1.333 1.333 0 0 0 10.667 12v2M14 14v.007m-6-9.34v2A1.333 1.333 0 0 1 6.667 8h-2M2 8h.007M8 2h.007M8 10.667v.006M10.667 8h.666M14 8v.007M8 14v-.667M2.667 2h2c.368 0 .666.298.666.667v2a.667.667 0 0 1-.666.666h-2A.667.667 0 0 1 2 4.667v-2C2 2.298 2.298 2 2.667 2Zm8.666 0h2c.368 0 .667.298.667.667v2a.667.667 0 0 1-.667.666h-2a.667.667 0 0 1-.666-.666v-2c0-.369.298-.667.666-.667Zm-8.666 8.667h2c.368 0 .666.298.666.666v2a.667.667 0 0 1-.666.667h-2A.667.667 0 0 1 2 13.333v-2c0-.368.298-.666.667-.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
