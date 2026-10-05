import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UserSearch', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.867 10h-2.2A2.667 2.667 0 0 0 2 12.667V14m12 0-1.267-1.267m-3.4-8.066a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Zm4 6.666a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
