import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Dices', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#dices_svg__a)",
		children: jsx("path", {
			d: "M11.946 9.333 14.28 7a1.494 1.494 0 0 0 0-2l-3.334-3.28a1.493 1.493 0 0 0-2 0L6.666 4M4 12h.006m2.66-2.667h.007M10 4h.006M12 6h.006m-9.34.667H8c.736 0 1.333.597 1.333 1.333v5.333c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V8c0-.736.597-1.333 1.333-1.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "dices_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
