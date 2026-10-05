import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ThermometerSun', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#thermometer-sun_svg__a)",
		children: jsx("path", {
			d: "M8 6a2.667 2.667 0 0 0-1.334 5M8 2v1.333m-3.6 8.934-.934.933m-.8-4.533H1.333m2.893-3.774-.94-.94m10.047-1.286v7.026a2.667 2.667 0 1 1-2.667 0V2.667a1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "thermometer-sun_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
