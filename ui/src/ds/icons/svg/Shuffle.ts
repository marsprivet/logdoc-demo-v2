import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Shuffle', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#shuffle_svg__a)",
		children: jsx("path", {
			d: "M1.333 12h.933c.867 0 1.667-.4 2.2-1.133l4.067-5.734C9 4.4 9.866 4 10.733 4h3.933m0 0L12 1.333M14.666 4 12 6.667M1.333 4H2.6c1 0 1.933.6 2.4 1.467M14.666 12h-3.933a2.663 2.663 0 0 1-2.2-1.2l-.333-.533M14.666 12 12 9.333M14.666 12 12 14.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "shuffle_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
