import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ShipWheel', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#ship-wheel_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v5m0 0c-.92 0-1.667.747-1.667 1.667M8 6.333c.92 0 1.666.747 1.666 1.667m3-4.667L9.18 6.82M14.666 8h-5m0 0c0 .92-.746 1.667-1.666 1.667m4.666 3L9.18 9.18M8 9.667v5m0-5c-.92 0-1.667-.747-1.667-1.667m.487 1.18-3.487 3.487m3-4.667h-5M6.82 6.82 3.333 3.333m10 4.667A5.333 5.333 0 1 1 2.666 8a5.333 5.333 0 0 1 10.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "ship-wheel_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
