import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MailQuestion', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 7V4a1.333 1.333 0 0 0-1.333-1.333H2.666A1.333 1.333 0 0 0 1.333 4v8c0 .733.6 1.333 1.333 1.333H11m3.666-8.666-5.98 3.8a1.293 1.293 0 0 1-1.373 0l-5.98-3.8M12 10.187c.133-.267.333-.534.6-.667a1.4 1.4 0 0 1 1.733.267c.2.266.333.533.333.866 0 .867-1.333 1.334-1.333 1.334m0 2.68v.006",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
