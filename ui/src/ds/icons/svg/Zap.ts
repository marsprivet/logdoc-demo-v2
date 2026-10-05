import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Zap', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 9.333a.667.667 0 0 1-.52-1.086l6.6-6.8a.333.333 0 0 1 .573.306L8.04 5.767a.667.667 0 0 0 .627.9h4.667a.667.667 0 0 1 .52 1.086l-6.6 6.8a.333.333 0 0 1-.574-.306l1.28-4.014a.666.666 0 0 0-.626-.9H2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
