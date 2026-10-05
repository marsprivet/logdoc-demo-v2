import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SizeSmall', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#size-small_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M9.037 6.667H6.963a.296.296 0 0 0-.296.296v2.074c0 .164.133.296.296.296h2.074a.296.296 0 0 0 .297-.296V6.963a.296.296 0 0 0-.297-.296ZM1.333 1.333h.007M4 1.333h.007M6.667 1.333h.007M9.333 1.333h.007M12 1.333h.007M14.667 1.333h.007M1.333 4h.007M4 4h.007M6.667 4h.007M9.333 4h.007M12 4h.007M14.667 4h.007M1.333 6.667h.007M4 6.667h.007M12 6.667h.007M14.667 6.667h.007M1.333 9.333h.007M4 9.333h.007M12 9.333h.007M14.667 9.333h.007M1.333 12h.007M4 12h.007M6.667 12h.007M9.333 12h.007M12 12h.007M14.667 12h.007M1.333 14.667h.007M4 14.667h.007M6.667 14.667h.007M9.333 14.667h.007M12 14.667h.007M14.667 14.667h.007" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "size-small_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
