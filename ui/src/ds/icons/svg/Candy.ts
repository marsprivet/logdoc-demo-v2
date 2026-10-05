import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Candy', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#candy_svg__a)",
		children: jsx("path", {
			d: "M9.333 4.333V11M6.666 5v6.667m4-7 .667-3.334.913.454a2 2 0 0 0 .887.213H14v.867c0 .306.066.613.213.886l.453.914-3.333.666m-6 6-.667 3.334-.913-.454A2 2 0 0 0 2.866 14H2v-.867a2 2 0 0 0-.214-.886l-.453-.914 3.333-.666M6.333 5 5 6.333A3.3 3.3 0 1 0 9.666 11L11 9.667A3.3 3.3 0 1 0 6.333 5Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "candy_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
