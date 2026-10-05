import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PhoneOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#phone-off_svg__a)",
		children: jsx("path", {
			d: "M7.12 8.873c.676.678 1.44 1.26 2.273 1.734l.847-.847a1.333 1.333 0 0 1 1.406-.3 8.56 8.56 0 0 0 1.874.467 1.334 1.334 0 0 1 1.146 1.333v2a1.333 1.333 0 0 1-1.453 1.333 13.194 13.194 0 0 1-5.753-2.046 12.949 12.949 0 0 1-2.22-1.78M3.46 8.54a13.193 13.193 0 0 1-2.047-5.753A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.073 2.48a8.56 8.56 0 0 0 .467 1.873 1.333 1.333 0 0 1-.3 1.407l-.847.847m9.273-5.274L1.333 14.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "phone-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
