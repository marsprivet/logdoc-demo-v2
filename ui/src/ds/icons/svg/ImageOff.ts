import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ImageOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#image-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M6.94 6.94a1.334 1.334 0 1 1-1.887-1.887M9 9l-5 5m8-6 2 2V3.333A1.333 1.333 0 0 0 12.666 2H6m-3.607.393a1.327 1.327 0 0 0-.393.94v9.334A1.333 1.333 0 0 0 3.333 14h9.333c.367 0 .702-.147.94-.393",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "image-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
