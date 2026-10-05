import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Flower', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 8a2 2 0 0 1-2 2m2-2a2 2 0 0 0-2-2m2 2h1m-3 2a2 2 0 0 1-2-2m2 2v1M6 8a2 2 0 0 1 2-2M6 8H5m3-2V5m0 6a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3M5 8a3 3 0 1 1 3-3m0 0a3 3 0 1 1 3 3M5.333 5.333l1.254 1.254m2.826 0 1.254-1.254m-5.334 5.334 1.254-1.254m2.826 0 1.254 1.254",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
