import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Blocks', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 14V5.333A.667.667 0 0 0 6 4.667H2.667A.667.667 0 0 0 2 5.333v8a.667.667 0 0 0 .667.667h8a.667.667 0 0 0 .666-.667V10a.667.667 0 0 0-.666-.667H2M10 2h3.333c.368 0 .667.298.667.667V6a.667.667 0 0 1-.667.667H10A.667.667 0 0 1 9.333 6V2.667c0-.369.299-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
