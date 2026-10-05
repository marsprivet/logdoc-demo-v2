import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Atom', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M13.467 13.467c1.36-1.354.013-4.907-3-7.934-3.027-3.013-6.58-4.36-7.934-3-1.36 1.354-.013 4.907 3 7.934 3.027 3.013 6.58 4.36 7.934 3Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M10.467 10.467c3.013-3.027 4.36-6.58 3-7.934-1.354-1.36-4.907-.013-7.934 3-3.013 3.027-4.36 6.58-3 7.934 1.354 1.36 4.907.013 7.934-3Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
}),
);
