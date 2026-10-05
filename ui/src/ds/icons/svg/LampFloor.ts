import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LampFloor', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 6v8.667m-2 0h4M6 1.333h4L12 6H4l2-4.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
