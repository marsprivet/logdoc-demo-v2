import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wrench', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.8 4.2a.667.667 0 0 0 0 .933L10.867 6.2a.666.666 0 0 0 .933 0l2.513-2.513A3.999 3.999 0 0 1 9.02 8.98l-4.607 4.607a1.414 1.414 0 0 1-2-2L7.02 6.98a4 4 0 0 1 5.293-5.293L9.8 4.2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
