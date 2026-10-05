import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RadioTower', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#radio-tower_svg__a)",
		children: jsx("path", {
			d: "M3.266 10.733c-2.6-2.6-2.6-6.866 0-9.466M5.2 3.133a4.093 4.093 0 0 0-.534 5M8 7.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm0 0-2.667 7.334M8 7.333l2.666 7.334M10.8 3.2c1.333 1.333 1.506 3.407.533 4.98m1.4-6.913a6.641 6.641 0 0 1 0 9.4M6.333 12h3.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "radio-tower_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
