import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Vote', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 8 1.333 1.333L10 6.667m4.666 6H1.333m2-8c0-.734.6-1.334 1.333-1.334h6.667a1.333 1.333 0 0 1 1.333 1.334v8H3.333v-8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
