import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LayoutPanelTop', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 2H2.667A.667.667 0 0 0 2 2.667V6c0 .368.298.667.667.667h10.666A.667.667 0 0 0 14 6V2.667A.667.667 0 0 0 13.333 2ZM6 9.333H2.667A.667.667 0 0 0 2 10v3.333c0 .368.298.667.667.667H6a.667.667 0 0 0 .667-.667V10A.667.667 0 0 0 6 9.333ZM13.333 9.333H10a.667.667 0 0 0-.667.667v3.333c0 .368.299.667.667.667h3.333a.667.667 0 0 0 .667-.667V10a.667.667 0 0 0-.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
