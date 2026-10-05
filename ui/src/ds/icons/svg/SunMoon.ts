import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SunMoon', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#sun-moon_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v1.334m0 10.666v1.334m-4.734-11.4L4.2 4.2m7.6 7.6.933.933M1.333 8h1.333m10.667 0h1.333M4.2 11.8l-.934.933m9.467-9.466L11.8 4.2M8 5.333A1.887 1.887 0 0 0 10.666 8 2.667 2.667 0 1 1 8 5.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "sun-moon_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
