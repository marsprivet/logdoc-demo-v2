import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Banana', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#banana_svg__a)",
		children: jsx("path", {
			d: "M2.666 8.667C5 7.333 8 7.333 9.333 10a3.667 3.667 0 0 1 5.333 3.333M3.433 11.927c3.68-1.014 5.767-4.594 4.667-8-.4-1.26-.434-2.594.566-2.594C10.813 1.333 12 5 12 6.667c0 4.333-2.8 8-6.994 8-1.6 0-3.673 0-3.673-1.334 0-1 .76-1.033 2.1-1.406Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "banana_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
