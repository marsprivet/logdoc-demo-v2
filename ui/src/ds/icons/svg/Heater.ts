import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Heater', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#heater_svg__a)",
		children: jsx("path", {
			d: "M7.333 5.333c1.333-2-1.333-2 0-4m3 4c1.333-2-1.333-2 0-4M4 6.667h.006M4 9.333h.006m2.66 1.334V8m2.667 2.667V8M12 10.667V8m1.333-4a1.333 1.333 0 0 1 1.333 1.333V12a1.333 1.333 0 0 1-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V5.333A1.333 1.333 0 0 1 2.666 4h2m-1.333 9.333v1.334m9.333-1.334v1.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "heater_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
