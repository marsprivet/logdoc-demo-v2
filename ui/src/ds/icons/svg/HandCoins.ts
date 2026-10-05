import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HandCoins', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#hand-coins_svg__a)",
		children: jsx("path", {
			d: "M7.333 10h1.333a1.333 1.333 0 0 0 0-2.667h-2c-.4 0-.733.134-.933.4L2 11.333M4.666 14l1.067-.933c.2-.267.533-.4.933-.4h2.667c.733 0 1.4-.267 1.867-.8l3.066-2.934a1.334 1.334 0 1 0-1.833-1.94l-2.8 2.6m-8.3 1.074 4 4M12.6 6a1.933 1.933 0 1 1-3.867 0A1.933 1.933 0 0 1 12.6 6ZM6 3.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "hand-coins_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
