import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Fence', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 5.333h2.666M4 12h2.666m2.667-6.667H12M9.333 12H12M2.666 2 1.333 3.333v10c0 .4.267.667.667.667h1.333c.4 0 .667-.267.667-.667v-10L2.666 2ZM8 2 6.666 3.333v10c0 .4.267.667.667.667h1.333c.4 0 .667-.267.667-.667v-10L8 2Zm5.333 0L12 3.333v10c0 .4.266.667.666.667H14c.4 0 .666-.267.666-.667v-10L13.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
