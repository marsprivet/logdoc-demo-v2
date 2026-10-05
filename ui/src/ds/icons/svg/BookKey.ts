import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BookKey', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m12.667 2 .667.667m0-1.334-3 3m3 1V14a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13m0 0a1.667 1.667 0 0 1 1.667-1.667h9M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h5m1.333 4a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
