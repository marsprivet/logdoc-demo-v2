import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Unlink', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#unlink_svg__a)",
		children: jsx("path", {
			d: "m12.56 8.167 1.146-1.14h-.013a3.336 3.336 0 0 0-.08-4.714 3.337 3.337 0 0 0-4.633 0l-1.147 1.14m-4.387 4.38-1.14 1.14a3.336 3.336 0 0 0 .08 4.714 3.338 3.338 0 0 0 4.634 0l1.14-1.14M5.333 1.333v2m-4 2h2m7.333 7.334v2m2-4h2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "unlink_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
