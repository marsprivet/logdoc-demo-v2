import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LayoutPanelLeft', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 2H2.667A.667.667 0 0 0 2 2.667v10.666c0 .368.298.667.667.667H6a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 6 2ZM13.333 2H10a.667.667 0 0 0-.667.667V6c0 .368.299.667.667.667h3.333A.667.667 0 0 0 14 6V2.667A.667.667 0 0 0 13.333 2ZM13.333 9.333H10a.667.667 0 0 0-.667.667v3.333c0 .368.299.667.667.667h3.333a.667.667 0 0 0 .667-.667V10a.667.667 0 0 0-.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
