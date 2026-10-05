import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MousePointerBan', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#mouse-pointer-ban_svg__a)",
		children: jsx("path", {
			d: "m7.866 7.867 5.6 5.6M1.333 1.333 4 8.667l1.333-3.334L8.666 4 1.333 1.333Zm13.333 9.334a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "mouse-pointer-ban_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
