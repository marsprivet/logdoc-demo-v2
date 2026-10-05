import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Telescope', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6.71 8.329-4.12.878a.623.623 0 0 1-.74-.468l-.357-1.433a.713.713 0 0 1 .46-.843l9.003-2.96M9.04 7.83l2.888-.616M10.666 14l-2.07-4.14M4.105 5.755l.743 2.971M5.333 14l2.07-4.14m3.587-5.9a1.333 1.333 0 0 1 .97-1.617l.726-.181a.667.667 0 0 1 .808.485l1.01 4.04a.667.667 0 0 1-.484.808l-.727.182a1.333 1.333 0 0 1-1.617-.97L10.99 3.96ZM9.333 8.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
