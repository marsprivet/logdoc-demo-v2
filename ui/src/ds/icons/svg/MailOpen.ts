import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MailOpen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#mail-open_svg__a)",
		children: jsx("path", {
			d: "M14.666 6.667c0-.42-.2-.814-.533-1.067L8.8 1.6a1.333 1.333 0 0 0-1.6 0l-5.334 4a1.333 1.333 0 0 0-.533 1.067m13.333 0v6.666a1.333 1.333 0 0 1-1.333 1.334H2.666a1.334 1.334 0 0 1-1.333-1.334V6.667m13.333 0-5.98 3.8a1.294 1.294 0 0 1-1.373 0l-5.98-3.8",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "mail-open_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
