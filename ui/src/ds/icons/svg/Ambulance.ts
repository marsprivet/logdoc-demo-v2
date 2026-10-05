import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ambulance', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 6.667H4M9.333 12V4A1.333 1.333 0 0 0 8 2.667H2.666A1.333 1.333 0 0 0 1.333 4v7.333A.667.667 0 0 0 2 12h1.333m0 0A1.333 1.333 0 0 0 6 12m-2.667 0A1.333 1.333 0 1 1 6 12m6.666 0H14a.667.667 0 0 0 .666-.667V9.147a.667.667 0 0 0-.456-.632l-1.282-.428a.667.667 0 0 1-.385-.334l-1.026-2.051a.667.667 0 0 0-.596-.369H9.333M12.666 12A1.333 1.333 0 0 1 10 12m2.666 0A1.333 1.333 0 1 0 10 12M5.333 5.333V8M6 12h4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
