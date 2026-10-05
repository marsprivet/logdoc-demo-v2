import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Worm', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m12.667 8-1 2m1.42 2.54 1.58.793M4.313 5.487A1.12 1.12 0 0 1 5.94 6.773L5.513 8.16a4.507 4.507 0 0 0 6.774 5.113l.28-.18a1.674 1.674 0 0 0-1.82-2.806l-.28.18A1.173 1.173 0 0 1 8.713 9.14l.427-1.387A4.44 4.44 0 0 0 2.627 2.6l-.467.267a1.678 1.678 0 0 0 1.7 2.893l.453-.273Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
