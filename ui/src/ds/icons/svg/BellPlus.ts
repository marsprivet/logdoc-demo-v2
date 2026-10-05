import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BellPlus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.867 9.867C13.4 10.933 14 11.333 14 11.333H2s2-1.333 2-6c0-2.2 1.8-4 4-4 .667 0 1.267.134 1.867.467m-3 12.2a1.293 1.293 0 0 0 2.266 0M10 5.333h4m-2-2v4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
