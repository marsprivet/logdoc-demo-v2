import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlarmClock', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 6v2.667L9.333 10m-6-8-2 2m13.333 0-2-2M4.253 12.467 2.666 14m9.094-1.553L13.333 14m0-5.333a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
