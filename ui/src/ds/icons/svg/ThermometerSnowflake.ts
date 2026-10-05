import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ThermometerSnowflake', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#thermometer-snowflake_svg__a)",
		children: jsx("path", {
			d: "M1.333 8H8M6 2.667v10.666M2 6l2 2-2 2m6-6L6 6 4 4m0 8 2-2 1 1m6.333-8.333v7.026a2.667 2.667 0 1 1-2.667 0V2.667a1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "thermometer-snowflake_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
