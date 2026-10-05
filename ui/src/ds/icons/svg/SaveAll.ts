import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SaveAll', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#save-all_svg__a)",
		children: jsx("path", {
			d: "M6.666 1.333v2A.667.667 0 0 0 7.333 4h3.333M12 12V8a.667.667 0 0 0-.667-.667h-4A.667.667 0 0 0 6.666 8v4M12 14.667H2.666a1.333 1.333 0 0 1-1.333-1.334V4m4 8A1.334 1.334 0 0 1 4 10.667v-8a1.333 1.333 0 0 1 1.333-1.334h6.115c.353 0 .692.14.942.391l1.886 1.885c.25.25.39.59.39.943v6.115A1.334 1.334 0 0 1 13.326 12H5.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "save-all_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
