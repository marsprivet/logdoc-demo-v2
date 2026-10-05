import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RouteOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#route-off_svg__a)",
		children: jsx("path", {
			d: "M6 12.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5.666c.267 0 .6-.067.867-.134M3.466 3.467a2.34 2.34 0 0 0-1.172 1.057 2.37 2.37 0 0 0 .561 2.934c.416.347.938.54 1.478.542H8M1.333 1.333l13.333 13.334M14 10.2A2.334 2.334 0 0 0 11.8 8M10 3.333H7.133m2.867 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "route-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
