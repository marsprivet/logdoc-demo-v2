import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareBottomDashedScissors', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#square-bottom-dashed-scissors_svg__a)",
		children: jsx("path", {
			d: "M2.666 14.667a1.333 1.333 0 0 1-1.333-1.334V2.667a1.333 1.333 0 0 1 1.333-1.334h10.667a1.333 1.333 0 0 1 1.333 1.334v10.666a1.333 1.333 0 0 1-1.333 1.334m-6.667 0H5.333m5.333 0H9.333M6.276 6.276 8 8m1.866 1.867L12 12m0-8L6.276 9.724m.39-4.39a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm0 5.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "square-bottom-dashed-scissors_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
