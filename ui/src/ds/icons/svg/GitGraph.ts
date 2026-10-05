import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GitGraph', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 2v12m4.666-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a5.999 5.999 0 0 1-2 4.467",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
