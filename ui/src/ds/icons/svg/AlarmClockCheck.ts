import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlarmClockCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m3.333 2-2 2m13.333 0-2-2M4.253 12.467 2.666 14m9.094-1.553L13.333 14M6 8.667 7.333 10 10 7.333m3.333 1.334a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
