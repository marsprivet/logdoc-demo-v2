import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CarTaxiFront', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 1.333h2.666m4.667 4-1.333 1.334m0 0-1-2.467a1.333 1.333 0 0 0-1.236-.867H5.6a1.333 1.333 0 0 0-1.269.838l-.998 2.496m9.334 0H3.333m9.334 0C13.403 6.667 14 7.264 14 8v2.667c0 .736-.597 1.333-1.333 1.333M3.333 6.667 2 5.333m1.333 1.334C2.597 6.667 2 7.264 2 8v2.667C2 11.403 2.597 12 3.333 12m1.334-2.667h.006m6.66 0h.007M12.667 12H3.333m9.334 0v1.333M3.333 12v1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
