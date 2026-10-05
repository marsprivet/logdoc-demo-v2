import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cherry', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cherry_svg__a)",
		children: jsx("path", {
			d: "M8 11.333a3.333 3.333 0 1 1-6.667 0c0-1.84 1.667-3.333 3.333-2m3.334 2c0-1.84-1.667-3.333-3.334-2m3.334 2a3.333 3.333 0 1 0 6.666 0c0-1.84-1.666-3.333-3.333-2m-3.333 2c0-1.84 1.666-3.333 3.333-2m-6.667 0c2.147-1.94 2.86-5.833 3.334-8m3.333 8c-.04-2-2.227-6.413-3.333-8m0 0C9.906 4.447 11.806 6 14.666 6c0-1.553-2.86-4.667-6.666-4.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cherry_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
