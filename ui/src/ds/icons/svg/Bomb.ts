import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bomb', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bomb_svg__a)",
		children: jsx("path", {
			d: "m9.566 3.1 1.3-1.3a1.607 1.607 0 0 1 2.267 0L14.2 2.867a1.6 1.6 0 0 1 0 2.266l-1.3 1.3m1.766-5.1-1 1m-.333 6.334a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bomb_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
