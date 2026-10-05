import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Accessibility', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 12.667 12.666 8l-4 .667M3.333 5.333l2-2 3.667 2-1.574 2.334m-4.6 2a3.333 3.333 0 0 0 4.587 4m1.76-2a3.333 3.333 0 0 0-4.587-4m6.747-5a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
