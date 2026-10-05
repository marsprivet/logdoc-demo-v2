import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Loader', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#loader_svg__a)",
		children: jsx("path", {
			d: "M8 1.333V4m2.8 1.2 1.933-1.933M12 8h2.666M10.8 10.8l1.933 1.933M8 12v2.667m-4.734-1.934L5.2 10.8M1.333 8H4m-.734-4.733L5.2 5.2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "loader_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
