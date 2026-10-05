import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pipette', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pipette_svg__a)",
		children: jsx("path", {
			d: "M1.333 14.667 2 14m0 0h2l6-6m-8 6v-2l6-6m2-2 2.266-2.267a1.414 1.414 0 0 1 2 2L12 6l.266.267a1.414 1.414 0 1 1-2 2L7.733 5.733a1.415 1.415 0 0 1 2-2L10 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pipette_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
