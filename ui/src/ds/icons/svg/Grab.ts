import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Grab', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 7.667V6a1.333 1.333 0 0 0-2.667 0v.933m0-.266V5.333a1.333 1.333 0 0 0-2.667 0v1.334m0-.067V6A1.333 1.333 0 0 0 4 6v3.333a1.333 1.333 0 1 0-2.667 0 5.333 5.333 0 0 0 5.333 5.334h2.667a5.333 5.333 0 0 0 5.333-5.334v-2a1.333 1.333 0 1 0-2.666 0",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
