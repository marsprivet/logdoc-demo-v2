import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Sprout', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 13.333h6.667m-4.667 0c3.667-1.666.533-4.266 2-6.666m0 0A4.667 4.667 0 0 1 9.4 4c.6-.667 1.467-1.267 3.267-1.333-.067 1.533-.467 2.4-1.133 3.066-.667.534-1.6.867-2.867.934Zm-2.333-.4c.733.533 1.2 1.466 1.533 2.466-1.333.267-2.333.267-3.2-.2-.8-.4-1.533-1.266-2-2.8 1.867-.333 2.933 0 3.667.534Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
