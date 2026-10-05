import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UtensilsCrossed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#utensils-crossed_svg__a)",
		children: jsx("path", {
			d: "M10.666 1.333 9.133 2.867a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0l1.534-1.534M10 10 2.2 2.2a2.8 2.8 0 0 0 0 4l4.866 4.867c.467.466 1.334.466 1.867 0L10 10Zm0 0 4.666 4.667M1.4 14.533l4.266-4.2m7-7L8 8",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "utensils-crossed_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
