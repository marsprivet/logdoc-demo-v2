import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ParkingMeter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 6a2 2 0 1 1 4 0M8 8v2m-.667 0h1.333M8 12.667v2M12.666 6A4.667 4.667 0 1 0 3.6 7.533c.666 2.067 1.733 5.134 1.733 5.134h5.333S11.733 9.6 12.4 7.533c.2-.533.266-1 .266-1.533Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
