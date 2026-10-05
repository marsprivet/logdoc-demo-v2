import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cone', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.933 12.367 8.6 1.713a.667.667 0 0 0-1.2 0L2.067 12.367m11.933.3c0 1.104-2.686 2-6 2s-6-.896-6-2c0-1.105 2.686-2 6-2s6 .895 6 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
