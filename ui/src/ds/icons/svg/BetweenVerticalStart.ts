import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BetweenVerticalStart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10 1.333-2 2-2-2m-3.333 4H6c.368 0 .667.299.667.667v7.333A.667.667 0 0 1 6 14H2.667A.667.667 0 0 1 2 13.333V6c0-.368.298-.667.667-.667Zm7.333 0h3.333c.368 0 .667.299.667.667v7.333a.667.667 0 0 1-.667.667H10a.667.667 0 0 1-.667-.667V6c0-.368.299-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
