import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GitCompare', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V5.333A1.334 1.334 0 0 0 10.667 4h-2M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v4.667A1.333 1.333 0 0 0 5.333 12h2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
