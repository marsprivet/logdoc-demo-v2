import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Lectern', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#lectern_svg__a)",
		children: jsx("path", {
			d: "M10.666 8h2a1.334 1.334 0 0 0 1.268-.92l.704-2.222A.666.666 0 0 0 14 4H2a.667.667 0 0 0-.639.858l.704 2.223A1.333 1.333 0 0 0 3.333 8h2M12 4V2a.667.667 0 0 0-.667-.667h-2M6 6.667h4c.368 0 .666.298.666.666V14a.667.667 0 0 1-.666.667H6A.667.667 0 0 1 5.333 14V7.333c0-.368.299-.666.667-.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "lectern_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
