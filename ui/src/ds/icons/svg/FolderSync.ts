import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderSync', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 13.333H2.666A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6h5.287a1.333 1.333 0 0 1 1.333 1.333v.334M8 6.667v2.666m0 0h2.666M8 9.333l1.023-1.07a3.333 3.333 0 0 1 5.333 1m.31 5.404V12m0 0H12m2.666 0-1.023 1.07a3.333 3.333 0 0 1-5.333-1",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
