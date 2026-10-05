import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Locate', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#locate_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h2m0 0A4.667 4.667 0 0 0 8 12.667M3.333 8A4.667 4.667 0 0 1 8 3.333M12.666 8h2m-2 0A4.667 4.667 0 0 1 8 12.667M12.666 8A4.667 4.667 0 0 0 8 3.333m0-2v2m0 9.334v2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "locate_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
