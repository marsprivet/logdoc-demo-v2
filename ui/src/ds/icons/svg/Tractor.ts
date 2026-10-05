import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Tractor', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6.666 7.333 7.334.6a.667.667 0 0 1 .533.734l-.443 2.772a.667.667 0 0 1-.659.561h-.098m0 0a1.333 1.333 0 1 1-2.667 0m2.667 0a1.333 1.333 0 1 0-2.667 0m0 0H7.333M12 3.333a.667.667 0 0 0-.667.667v3.715M2 2.667h5.419a.667.667 0 0 1 .66.575l.587 4.255m-6-.164V2.667m2 7.333h.007m.66-3.267V2.667M8 10a3.333 3.333 0 1 1-6.667 0A3.333 3.333 0 0 1 8 10Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
