import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BugOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bug-off_svg__a)",
		children: jsx("path", {
			d: "M10 4.753V4a2 2 0 0 0-3.427-1.4l-1.24-1.267m4.08 1.254 1.253-1.254m4 7.334H12V7.333a2.667 2.667 0 0 0-2.667-2.666h-.867m5.514-1.334c0 1.4-1.067 2.534-2.334 2.667M1.333 1.333l13.333 13.334M5.133 5.133A2.667 2.667 0 0 0 4 7.333v2a4 4 0 0 0 7.42 2.087M8 13.333V8m-4 .667H1.333M2 14c0-1.4 1.133-2.6 2.533-2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bug-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
