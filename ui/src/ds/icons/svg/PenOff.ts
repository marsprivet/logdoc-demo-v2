import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PenOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pen-off_svg__a)",
		children: jsx("path", {
			d: "m6.667 6.667-4.105 4.108c-.155.155-.27.345-.333.555l-.882 2.907a.333.333 0 0 0 .415.416l2.905-.882c.21-.064.4-.179.554-.334l4.112-4.116m-.78-4.54 2.906-2.897a1.879 1.879 0 1 1 2.657 2.657l-2.902 2.902m-9.88-6.11 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pen-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
