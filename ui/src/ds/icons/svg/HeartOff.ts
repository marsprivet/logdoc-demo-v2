import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HeartOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#heart-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M11 11l-3 3-4.667-4.667c-1-.966-2-2.133-2-3.666a3.666 3.666 0 0 1 1.427-2.9m3.08-.7c.766.146 1.42.52 2.16 1.266C9 2.333 9.826 2 11 2a3.667 3.667 0 0 1 3.666 3.667c0 1.413-.866 2.52-1.78 3.446",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "heart-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
