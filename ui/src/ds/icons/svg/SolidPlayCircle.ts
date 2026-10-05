import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SolidPlayCircle', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#solid-play-circle_svg__a)",
		children: [jsx("path", {
			d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
			fill: "#fff",
			stroke: "#fff",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), jsx("path", {
			d: "M6.167 6.224a.833.833 0 0 1 1.296-.694l2.664 1.777a.833.833 0 0 1 0 1.386L7.463 10.47a.833.833 0 0 1-1.296-.694V6.224Z",
			fill: "#121317"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-play-circle_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
