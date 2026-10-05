import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('EllipsisVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4ZM8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
