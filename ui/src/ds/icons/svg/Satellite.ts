import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Satellite', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.667 4.667 6 2 3.333 4.667 6 7.333m5.333 0L14 10l-2.667 2.667L8.667 10m2-4.667 2-2M6 14a4 4 0 0 0-4-4m3.333-2L8 10.667l4-4L9.333 4l-4 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
