import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Usb', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m3.133 12.867 9.534-9.534M6.173 5.12 3.333 8l1.334 3.333m2-2L10 10.667l2.333-2.334m-5-3.666a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Zm-4 8.666a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM14 2l-2 .667L13.333 4 14 2Zm-2 6 .667-.667.666.667-.666.667L12 8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
