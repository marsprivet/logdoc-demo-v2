import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Fingerprint', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#fingerprint_svg__a)",
		children: jsx("path", {
			d: "M8 6.667A1.333 1.333 0 0 0 6.666 8c0 .68-.066 1.673-.173 2.667m2.84-1.92c0 1.586 0 4.253-.667 5.92m2.86-.654c.08-.4.287-1.533.334-2.013M1.333 8a6.667 6.667 0 0 1 12-4m-12 6.667h.007m13.193 0c.133-1.334.087-3.57 0-4M3.333 13C3.666 12 4 10 4 8a4 4 0 0 1 .226-1.333m1.54 8c.14-.44.3-.88.38-1.334M6 4.533A4 4 0 0 1 12 8v1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "fingerprint_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
