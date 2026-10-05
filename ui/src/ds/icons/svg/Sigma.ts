import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Sigma', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 4.667V3.333a.666.666 0 0 0-.667-.666h-7a.333.333 0 0 0-.266.533l3 4a1.333 1.333 0 0 1 0 1.6l-3 4a.333.333 0 0 0 .266.533h7a.667.667 0 0 0 .667-.666v-1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
