import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DnaOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#dna-off_svg__a)",
		children: jsx("path", {
			d: "M10 1.333c-.9 1-1.395 2-1.667 3l1 1m2-1.333L9.406 2.073M1.333 10C3.555 8 5.778 8 8 8M1.333 1.333l13.333 13.334M13.333 6l.594.594m.74-.594c-1 .9-2 1.395-3 1.667L11 7M2.072 9.406l.594.594m1.667-1.667L5 9m-.334 3 1.928 1.927m-.594.74c.9-1 1.394-2 1.666-3l-1-1",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "dna-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
