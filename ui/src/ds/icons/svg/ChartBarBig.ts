import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ChartBarBig', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M5.333 8.667H10c.368 0 .667.298.667.666v1.334a.667.667 0 0 1-.667.666H5.333a.667.667 0 0 1-.666-.666V9.333c0-.368.298-.666.666-.666Zm0-5.334H12c.368 0 .667.299.667.667v1.333A.667.667 0 0 1 12 6H5.333a.667.667 0 0 1-.666-.667V4c0-.368.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
