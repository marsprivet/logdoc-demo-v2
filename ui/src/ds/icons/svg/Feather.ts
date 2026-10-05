import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Feather', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#feather_svg__a)",
		children: jsx("path", {
			d: "m10.666 5.333-9.333 9.334M11.666 10H6m2.446 2.667a1.332 1.332 0 0 0 .944-.392l4.103-4.115a4.002 4.002 0 1 0-5.66-5.66l-4.11 4.11c-.25.25-.39.588-.39.942V12a.667.667 0 0 0 .667.667h4.446Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "feather_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
