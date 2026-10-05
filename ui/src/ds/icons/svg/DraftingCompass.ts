import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DraftingCompass', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m8.66 4.493 1.287 2.294M12.757 8a6.666 6.666 0 0 1-9.514 0M14 14l-1.44-2.56M2 14l5.347-9.507m1.986-1.16a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
