import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderOpen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 9.333 5 7.4a1.333 1.333 0 0 1 1.16-.733h7.173m0 0a1.333 1.333 0 0 1 1.293 1.666l-1.026 4a1.334 1.334 0 0 1-1.3 1H2.666A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6H12a1.333 1.333 0 0 1 1.333 1.333v1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
