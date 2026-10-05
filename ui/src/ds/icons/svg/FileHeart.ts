import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334V4m6.667-2.667V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-6.473 1.8a1.62 1.62 0 0 0-2.294.007l-.233.227L4.1 7.14a1.62 1.62 0 0 0-2.294 0c-.633.627-.666 1.687.134 2.493L4.333 12l2.4-2.367c.8-.806.76-1.866.127-2.493v-.007Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
