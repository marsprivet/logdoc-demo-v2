import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Images', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#images_svg__a)",
		children: jsx("path", {
			d: "M12 14.667H2.666a1.334 1.334 0 0 1-1.333-1.334V4m13.333 4.667-.864-.864a1.607 1.607 0 0 0-2.272 0L7.333 12m2-6.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm-4-4h8c.736 0 1.333.597 1.333 1.334v8c0 .736-.597 1.333-1.333 1.333h-8A1.333 1.333 0 0 1 4 10.667v-8c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "images_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
