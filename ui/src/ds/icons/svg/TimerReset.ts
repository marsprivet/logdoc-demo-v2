import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TimerReset', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 1.333h2.667M8 9.333V6.667m-5.333 2A5.333 5.333 0 0 1 8 4a5.333 5.333 0 1 1-3.533 9.333l-1.8-1.6m3.333-.4H2.667v3.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
