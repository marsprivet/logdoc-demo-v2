import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('VolumeX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14.666 6-4 4m0-4 4 4M7.333 3.333 4 6H1.333v4H4l3.333 2.667V3.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
