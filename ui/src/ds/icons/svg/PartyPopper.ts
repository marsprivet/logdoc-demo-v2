import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PartyPopper', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#party-popper_svg__a)",
		children: jsx("path", {
			d: "m3.866 7.533-2.533 7.134 7.133-2.527M2.666 2h.007m11.993 3.333h.007m-4.673-4h.006m4.66 12h.007m-.007-12-1.493.5a1.933 1.933 0 0 0-1.307 2.08A.974.974 0 0 1 10.9 5h-.254c-.573 0-1.066.4-1.173.96l-.14.707m5.333 2-.546-.22a.978.978 0 0 0-1.32.74.967.967 0 0 1-.954.813h-.513m-4-8.667.22.547a.978.978 0 0 1-.74 1.32.962.962 0 0 0-.813.953v.514m1.333 4C8.62 9.953 9.22 11.447 8.666 12c-.553.553-2.046-.047-3.333-1.333C4.046 9.38 3.446 7.887 4 7.333c.553-.553 2.046.047 3.333 1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "party-popper_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
