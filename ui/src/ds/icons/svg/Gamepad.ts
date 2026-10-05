import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Gamepad', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 8h2.666M5.333 6.667v2.666M10 8.667h.006M12 7.333h.006M2.666 4h10.667c.736 0 1.333.597 1.333 1.333v5.334c0 .736-.597 1.333-1.333 1.333H2.666a1.333 1.333 0 0 1-1.333-1.333V5.333C1.333 4.597 1.93 4 2.666 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
