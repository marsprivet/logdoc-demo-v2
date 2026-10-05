import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Rocket', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 10 6 8m2 2a14.9 14.9 0 0 0 2.667-1.333M8 10v3.333s2.02-.366 2.667-1.333c.72-1.08 0-3.333 0-3.333M6 8c.355-.92.802-1.803 1.334-2.633a8.586 8.586 0 0 1 7.333-4.034c0 1.814-.52 5-4 7.334M6 8H2.667S3.034 5.98 4 5.333c1.08-.72 3.334 0 3.334 0M3 11c-1 .84-1.333 3.333-1.333 3.333S4.16 14 5 13c.474-.56.467-1.42-.06-1.94A1.454 1.454 0 0 0 3 11Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
