import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GripVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM6 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 6 4ZM6 13.333A.667.667 0 1 0 6 12a.667.667 0 0 0 0 1.333ZM10 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM10 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 10 4ZM10 13.333A.667.667 0 1 0 10 12a.667.667 0 0 0 0 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
