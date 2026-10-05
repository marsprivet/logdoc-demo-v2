import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Speech', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.866 13.333V10.6l1.267.133a1.533 1.533 0 0 0 1.443-1.4v-3.8A3.621 3.621 0 1 0 1.333 5.5c0 1.867.437 2.036.667 3.033.155.603.161 1.234.019 1.839l-.686 2.961M13.2 11.867a5 5 0 0 0 .002-7.069M11.333 10a2.335 2.335 0 0 0-.017-3.317",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
