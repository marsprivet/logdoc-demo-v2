import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('KeySquare', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#key-square_svg__a)",
		children: jsx("path", {
			d: "m9.333 4.667 2 2m-5.067.4-4.542 4.542c-.25.25-.39.59-.391.943V14a.667.667 0 0 0 .667.667h2A.667.667 0 0 0 4.666 14v-.667a.667.667 0 0 1 .667-.666H6A.667.667 0 0 0 6.666 12v-.667a.667.667 0 0 1 .667-.666h.115c.353 0 .692-.14.942-.391l.543-.543M8.266 1.8a1.667 1.667 0 0 1 2.267 0L14.2 5.467a1.667 1.667 0 0 1 0 2.266L11.733 10.2a1.667 1.667 0 0 1-2.267 0L5.8 6.533a1.667 1.667 0 0 1 0-2.266L8.266 1.8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "key-square_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
