import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Brush', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6.04 7.933 5.38-5.373a1.9 1.9 0 1 1 2.687 2.687l-5.374 5.386m-4.02-.673c-1.106 0-2 .9-2 2.013 0 .887-1.666 1.014-1.333 1.347.72.733 1.66 1.347 2.667 1.347 1.466 0 2.666-1.2 2.666-2.694a2.006 2.006 0 0 0-2-2.013Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
