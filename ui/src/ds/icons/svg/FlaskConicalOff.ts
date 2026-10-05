import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FlaskConicalOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#flask-conical-off_svg__a)",
		children: jsx("path", {
			d: "M6.666 6.667 3.146 13.7a.667.667 0 0 0 .6.967h8.507a.666.666 0 0 0 .6-.967l-.848-1.695M6.666 1.333v1.562m2.667-1.562v4.229M5.666 1.333h4.667m-5.667 9.334h6M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "flask-conical-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
