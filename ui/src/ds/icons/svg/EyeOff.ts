import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('EyeOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#eye-off_svg__a)",
		children: jsx("path", {
			d: "M7.155 3.384a7.163 7.163 0 0 1 7.47 4.383.666.666 0 0 1 0 .464 7.163 7.163 0 0 1-.962 1.66M9.389 9.44A2 2 0 0 1 6.561 6.61m5.092 5.055A7.167 7.167 0 0 1 1.375 8.232a.667.667 0 0 1 0-.464 7.167 7.167 0 0 1 2.964-3.429M1.333 1.333l13.334 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "eye-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
