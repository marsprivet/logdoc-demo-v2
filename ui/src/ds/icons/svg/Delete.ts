import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Delete', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m8 6 4 4m0-4-4 4M6.666 3.333c-.331 0-.65.124-.896.346L1.552 7.506a.667.667 0 0 0 0 .987l4.218 3.828c.246.222.565.346.896.346h6.667a1.333 1.333 0 0 0 1.333-1.334V4.667a1.334 1.334 0 0 0-1.333-1.334H6.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
