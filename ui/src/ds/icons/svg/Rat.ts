import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Rat', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#rat_svg__a)",
		children: jsx("path", {
			d: "M11.333 3.333c0-1.133-.867-2-2-2s-2 .867-2 2c0 .534.2 1 .533 1.334h-.533a4.638 4.638 0 0 0-4.667 4.666C2.666 10.8 3.866 12 5.333 12M11.2 2.6c.2-.2.4-.333.666-.467 1-.4 2.2.067 2.6 1.067.4 1-.066 2.2-1.066 2.6l1.066 1.867c.134.2.134.466.134.666-.134.534-.6.8-1.134.734 0 0-1.066-.2-1.8-.4h-.333c-1.133 0-2 .866-2 2M8.8 12a2 2 0 0 0-1.467-3.333m1.333 6h-6a1.333 1.333 0 0 1 0-2.667h8m0-6h.007",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "rat_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
