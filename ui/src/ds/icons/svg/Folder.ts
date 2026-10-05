import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Folder', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 13.333A1.333 1.333 0 0 0 14.666 12V5.333A1.333 1.333 0 0 0 13.333 4H8.066a1.333 1.333 0 0 1-1.126-.6l-.54-.8A1.333 1.333 0 0 0 5.286 2h-2.62a1.333 1.333 0 0 0-1.333 1.333V12a1.333 1.333 0 0 0 1.333 1.333h10.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
