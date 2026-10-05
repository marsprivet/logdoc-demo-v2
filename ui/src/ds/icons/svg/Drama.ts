import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Drama', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#drama_svg__a)",
		children: jsx("path", {
			d: "M6.666 7.333h.007M9.333 4h.007M12 4h.007M4.333 8.733h.007M11.6 6.6a1.289 1.289 0 0 1-1.867 0m-3-1.867c-.733.067-1.6.4-2.733 1-2.334 1.334-3.134 2.6-2.467 3.734 3 5.2 6.333 5.6 7.467 4.933.6-.333 1.267-1.4 1.267-3.133M6.067 11c.2-.733.933-1.133 1.6-.933m7-6.734c0 6-2.667 8-4 8-1.334 0-4-2-4-8 0-1.333 1.333-2 4-2 2.666 0 4 .667 4 2Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "drama_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
