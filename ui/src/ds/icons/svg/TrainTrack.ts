import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TrainTrack', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#train-track_svg__a)",
		children: jsx("path", {
			d: "m1.333 11.333 10-10m-10 8 5.333 5.334M3.333 7.333l5.333 5.334M5.333 5.333l5.333 5.334M7.333 3.333l5.333 5.334M9.333 1.333l5.333 5.334m-10 8 10-10",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "train-track_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
