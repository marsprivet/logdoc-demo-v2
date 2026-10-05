import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SaveOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#save-off_svg__a)",
		children: jsx("path", {
			d: "M8.666 8.667H5.333a.667.667 0 0 0-.667.666V14m4.667-8.667H10M11.333 14v-2.667m-10-10 13.333 13.334m-1.06-1.06c-.249.25-.587.392-.94.393H3.333A1.334 1.334 0 0 1 2 12.667V3.333c.001-.353.143-.69.393-.94m17.273 5.274S23 11 22.333 11M6 2h4.133c.352.005.687.149.933.4L13.6 4.933c.25.247.395.582.4.934V10",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "save-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
