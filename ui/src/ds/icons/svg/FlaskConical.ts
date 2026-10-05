import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlaskConical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 1.333v5.018c0 .208-.048.412-.141.598L3.146 13.7a.667.667 0 0 0 .6.967h8.507a.666.666 0 0 0 .6-.967l-3.38-6.751a1.333 1.333 0 0 1-.14-.598V1.333m-3.666 0h4.666m-5.666 9.334h6.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
