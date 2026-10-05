import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CigaretteOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cigarette-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M8 8H1.333v2.667h9.333m4-2.667v2.667M12 8h-.334m-7 0v2.667M12 5.333C12 3.667 10.666 3.667 10.666 2m4 3.333c0-1.666-1.333-1.666-1.333-3.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cigarette-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
