import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareParkingOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#square-parking-off_svg__a)",
		children: jsx("path", {
			d: "M2.4 2.4c.246-.251.581-.395.933-.4h9.333A1.333 1.333 0 0 1 14 3.333v9.334a1.334 1.334 0 0 1-.394.94M2 5.8v6.867A1.333 1.333 0 0 0 3.333 14H10.2M1.333 1.333l13.333 13.334m-6-6a2 2 0 0 0 0-4H6V6m0 5.333V9.8",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "square-parking-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
