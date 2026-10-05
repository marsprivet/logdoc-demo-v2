import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Shapes', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.533 6.667a.467.467 0 0 1-.417-.72L7.6 2a.467.467 0 0 1 .799-.029l2.468 3.962a.467.467 0 0 1-.382.734H5.533ZM6 9.333H2.667A.667.667 0 0 0 2 10v3.333c0 .368.298.667.667.667H6a.667.667 0 0 0 .667-.667V10A.667.667 0 0 0 6 9.333ZM11.667 14a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
