import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareDashedMousePointer', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 2A1.333 1.333 0 0 0 2 3.333M12.667 2A1.333 1.333 0 0 1 14 3.333M3.333 14A1.334 1.334 0 0 1 2 12.667M6 2h.667M6 14h1.333m2-12H10M2 6v.667M14 6v1.333m-12 2V10m6-2 2.667 6.667L11.8 11.8l2.867-1.133L8 8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
