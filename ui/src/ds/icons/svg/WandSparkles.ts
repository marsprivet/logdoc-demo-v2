import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('WandSparkles', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#wand-sparkles_svg__a)",
		children: jsx("path", {
			d: "m9.333 4.667 2 2M3.333 4v2.667m9.333 2.666V12m-6-10.667v1.334m-2 2.666H2m12 5.334h-2.667M7.333 2H6m8.427.427-.854-.854a.807.807 0 0 0-1.146 0L1.573 12.427a.807.807 0 0 0 0 1.146l.854.854a.799.799 0 0 0 1.146 0L14.427 3.573a.8.8 0 0 0 0-1.146Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "wand-sparkles_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
