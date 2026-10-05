import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ShieldOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#shield-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M3.333 3.333A.667.667 0 0 0 2.666 4v4.667c0 3.333 2.334 5 5.114 5.96a.667.667 0 0 0 .446.006c1.567-.546 2.987-1.313 3.934-2.473M6.206 2.435a8.168 8.168 0 0 0 1.287-.915.78.78 0 0 1 1.013 0c1.167 1.02 2.827 1.813 4.16 1.813a.666.666 0 0 1 .667.667v4.667c0 .281-.017.563-.053.842",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "shield-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
