import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TowerControl', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 8.667v6m5.333 0v-6M6 4l.667 4.667M10 4l-.666 4.667M8 4V1.333m.667 0H7.334m4.8 6.847 1.2-4.18H2.667l1.2 4.18a.667.667 0 0 0 .633.487h7a.667.667 0 0 0 .64-.487h-.006Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
