import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 4v4M10 4v4M1.333 8H14.4M12 12h2s.333-1.133.533-1.867c.067-.266.133-.533.133-.8 0-.266-.066-.533-.133-.8L13.6 5.2C13.4 4.533 12.733 4 12 4H2.666a1.333 1.333 0 0 0-1.333 1.333V12h2M12 12a1.333 1.333 0 0 1-2.667 0M12 12a1.333 1.333 0 0 0-2.667 0m-6 0A1.333 1.333 0 1 0 6 12m-2.667 0A1.333 1.333 0 1 1 6 12m0 0h3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
