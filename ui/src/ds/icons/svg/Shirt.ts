import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Shirt', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#shirt_svg__a)",
		children: jsx("path", {
			d: "m13.586 2.307-2.92-.974a2.666 2.666 0 1 1-5.333 0l-2.92.974a1.333 1.333 0 0 0-.893 1.486l.386 2.314a.667.667 0 0 0 .66.56H4v6.666c0 .734.6 1.334 1.333 1.334h5.333A1.333 1.333 0 0 0 12 13.333V6.667h1.434a.667.667 0 0 0 .66-.56l.386-2.314a1.333 1.333 0 0 0-.893-1.486Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "shirt_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
