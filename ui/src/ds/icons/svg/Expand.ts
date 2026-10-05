import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Expand', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14 14-4-4m4 4v-3.2m0 3.2h-3.2M2 10.8V14m0 0h3.2M2 14l4-4m8-4.8V2m0 0h-3.2M14 2l-4 4m-8-.8V2m0 0h3.2M2 2l4 4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
