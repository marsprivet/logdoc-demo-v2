import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CableCar', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cable-car_svg__a)",
		children: jsx("path", {
			d: "M6.666 2h.007m2.66-.667h.007M1.333 6l13.333-3.333M8 8V4.333M6 8v3.333M10 8v3.333m-7.334 0h10.667M4.666 8h6.667a2 2 0 0 1 2 2v2.667a2 2 0 0 1-2 2H4.666a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cable-car_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
