import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pyramid', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pyramid_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v13.334m-6.333-3.414a.665.665 0 0 1-.214-.953l6-8.68a.667.667 0 0 1 1.094 0l6 8.673a.666.666 0 0 1-.214.96l-5.673 3.24a1.333 1.333 0 0 1-1.32 0l-5.673-3.24Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pyramid_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
