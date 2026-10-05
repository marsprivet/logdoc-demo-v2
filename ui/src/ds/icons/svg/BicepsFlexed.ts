import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BicepsFlexed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#biceps-flexed_svg__a)",
		children: jsx("path", {
			d: "M8.272 8.678A3.333 3.333 0 0 1 14.666 10c0 2.577-2.666 4.667-6 4.667-2.718 0-5.435-.547-6.914-1.642-.284-.21-.42-.554-.413-.908.073-3.635.412-10.784 5.327-10.784a2 2 0 0 1 2 2 1.333 1.333 0 0 1-1.333 1.334C6.596 4.667 6.24 4.37 6 4m4 5.333a3.333 3.333 0 0 0-5.056 1.334M6.642 4.55c-1.296.768-.309 4.117-1.309 5.45",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "biceps-flexed_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
