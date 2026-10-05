import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Baby', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 8h.006M10 8h.006m-3.34 2.667c.334.2.8.333 1.334.333.533 0 1-.133 1.333-.333M12.666 4.2a6 6 0 0 1 1.2 2.6 1.333 1.333 0 0 1 0 2.4 6 6 0 0 1-11.733 0 1.333 1.333 0 0 1 0-2.4A6 6 0 0 1 8 2c1.333 0 2.333.733 2.333 1.667 0 .933-.6 1.666-1.333 1.666-.534 0-1-.266-1-.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
