import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Promql', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 1.333c.667 1.693 1.667 1.975 2.334 2.539.628.52.987 1.23 1 1.974 0 .748-.351 1.466-.977 1.995-.625.529-1.473.826-2.357.826-.884 0-1.732-.297-2.357-.826-.625-.53-.976-1.247-.976-1.995 0-.17 0-.338.067-.508.056.167.157.32.295.45.138.128.309.227.5.29a1.556 1.556 0 0 0 1.178-.085c.175-.09.324-.213.434-.359.11-.146.178-.312.2-.485a.968.968 0 0 0-.074-.51 1.132 1.132 0 0 0-.333-.429c-1.6-1.466.4-2.877 1.066-2.877ZM11.333 10.667l-3.333 4-3.334-4h6.667Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
