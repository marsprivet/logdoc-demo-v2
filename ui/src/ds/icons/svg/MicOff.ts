import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MicOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#mic-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M12.593 8.82c.048-.27.073-.545.073-.82V6.667m-9.333 0V8a4.667 4.667 0 0 0 8 3.333M10 6.227V3.333a2 2 0 0 0-3.787-.886M6 6v2a2 2 0 0 0 3.413 1.413M8 12.667v2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "mic-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
