import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HeartPulse', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.146 8h4.187l.333-.667 1.334 3 1.333-4.666 1 2.333h3.513m-1.18 1.333c.994-.973 2-2.14 2-3.666A3.667 3.667 0 0 0 11 2c-1.174 0-2 .333-3 1.333C7 2.333 6.173 2 5 2a3.667 3.667 0 0 0-3.667 3.667c0 1.533 1 2.7 2 3.666L8 14l4.666-4.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
