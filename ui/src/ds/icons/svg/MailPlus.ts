import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MailPlus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 8.667V4a1.333 1.333 0 0 0-1.333-1.333H2.666A1.333 1.333 0 0 0 1.333 4v8c0 .733.6 1.333 1.333 1.333H8m6.666-8.666-5.98 3.8a1.293 1.293 0 0 1-1.373 0l-5.98-3.8m11.333 6v4m-2-2h4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
