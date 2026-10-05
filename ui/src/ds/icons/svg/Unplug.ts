import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Unplug', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#unplug_svg__a)",
		children: jsx("path", {
			d: "m12.666 3.333 2-2M1.333 14.667l2-2M5 9l1.666-1.667M7 11l1.666-1.667m-4.466 4.2a1.599 1.599 0 0 0 2.266 0L8 12 4 8 2.466 9.533a1.6 1.6 0 0 0 0 2.267L4.2 13.533ZM8 4l4 4 1.533-1.533a1.6 1.6 0 0 0 0-2.267L11.8 2.467a1.6 1.6 0 0 0-2.267 0L8 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "unplug_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
