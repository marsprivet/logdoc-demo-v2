import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BatteryLow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 7.333v1.334M4 7.333v1.334m-1.334-4h8C11.403 4.667 12 5.264 12 6v4c0 .736-.597 1.333-1.334 1.333h-8A1.333 1.333 0 0 1 1.333 10V6c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
