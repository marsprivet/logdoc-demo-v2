import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LocateOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#locate-off_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h2m0 0c0-1.267.553-2.407 1.407-3.26M3.333 8A4.663 4.663 0 0 0 8 12.667M12.666 8h2m-2 0c0 .447-.066.887-.193 1.307M12.666 8A4.663 4.663 0 0 0 8 3.333m0-2v2m0 0c-.447 0-.887.067-1.307.194M8 12.667v2m0-2c1.266 0 2.406-.554 3.26-1.407M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "locate-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
