import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MapPinPlus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.276 7.403c.038-.243.057-.49.058-.736a5.333 5.333 0 1 0-10.667 0c0 3.328 3.693 6.795 4.933 7.866a.667.667 0 0 0 .801 0c.186-.161.37-.325.55-.492M10.666 12h4m-2-2v4M10 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
