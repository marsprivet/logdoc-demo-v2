import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Droplets', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.373 4.4c.459-.733.784-1.54.96-2.387C9.667 3.68 10.667 5.28 12 6.347c1.333 1.066 2 2.333 2 3.666a4.654 4.654 0 0 1-7.94 3.314m-1.393-2.46c1.466 0 2.666-1.22 2.666-2.7 0-.774-.38-1.507-1.14-2.127-.76-.62-1.333-1.54-1.526-2.507A4.39 4.39 0 0 1 3.14 6.04C2.373 6.653 2 7.4 2 8.167c0 1.48 1.2 2.7 2.667 2.7Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
