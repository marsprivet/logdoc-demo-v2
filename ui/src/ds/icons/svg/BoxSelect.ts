import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BoxSelect', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 2A1.333 1.333 0 0 0 2 3.333M12.667 2A1.333 1.333 0 0 1 14 3.333m0 9.334A1.334 1.334 0 0 1 12.667 14m-9.334 0A1.334 1.334 0 0 1 2 12.667M6 2h.667M6 14h.667M9.333 2H10m-.667 12H10M2 6v.667M14 6v.667M2 9.333V10m12-.667V10",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
