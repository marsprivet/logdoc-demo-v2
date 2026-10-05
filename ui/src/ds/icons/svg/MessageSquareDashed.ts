import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MessageSquareDashed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 4v-.667C2 2.6 2.6 2 3.333 2h1.334m2.666 0h2M12 2h.667C13.4 2 14 2.6 14 3.333M14 6v1.333M14 10c0 .733-.6 1.333-1.333 1.333H12m-2.667 0h-2m-2.666 0L2 14v-3.333M2 8V6.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
