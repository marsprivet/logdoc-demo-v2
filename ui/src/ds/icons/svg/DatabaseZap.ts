import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('DatabaseZap', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 3.333c0 1.105-2.686 2-6 2s-6-.895-6-2m12 0c0-1.104-2.686-2-6-2s-6 .896-6 2m12 0v2m-12-2v9.334c-.004.32.224.636.664.922.44.285 1.078.53 1.862.716.785.186 1.691.306 2.644.35.953.045 1.923.012 2.83-.095M14 8l-2 3.333h2.667l-2 3.334M2 8c.001.312.22.619.641.897.42.279 1.03.52 1.781.706.75.186 1.621.311 2.542.365.921.054 1.867.035 2.763-.055",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
