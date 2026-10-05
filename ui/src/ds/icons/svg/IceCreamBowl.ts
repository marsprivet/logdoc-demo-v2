import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('IceCreamBowl', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 14h5.333M8 12v2M3.427 7.333a2.333 2.333 0 1 1 4.473 0m.194 0a2.333 2.333 0 1 1 4.473 0m-2.233-3a2.333 2.333 0 0 0-4.667 0m2.333 7c3.334 0 5.334-1.793 5.334-4H2.667c0 2.207 2 4 5.333 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
