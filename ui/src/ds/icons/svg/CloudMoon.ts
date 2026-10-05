import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudMoon', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.792 5.667a4 4 0 0 1 3.875-3 2.829 2.829 0 0 0 4 4 4 4 0 0 1-2 3.464m-4 .536a2 2 0 0 1 0 4h-4a3.333 3.333 0 1 1 3.266-4h.734Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
