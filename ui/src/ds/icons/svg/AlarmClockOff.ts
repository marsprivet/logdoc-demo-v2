import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlarmClockOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#alarm-clock-off_svg__a)",
		children: jsx("path", {
			d: "M4.58 4.58a5.333 5.333 0 1 0 7.506 7.507m1.18-2.587a5.332 5.332 0 0 0-6.1-6.1m7.5.6-2-2M4.173 12.447 2.666 14M1.333 1.333l13.333 13.334m-12-12L1.333 4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "alarm-clock-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
