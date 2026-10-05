import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookmarkX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.666 5 6.333 8.333m0-3.333 3.333 3.333m3 5.667L8 11.333 3.333 14V3.333A1.333 1.333 0 0 1 4.666 2h6.667a1.333 1.333 0 0 1 1.333 1.333V14Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
