import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Origami', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8V2.667A.667.667 0 0 1 8.666 2h4.198a.667.667 0 0 1 .434 1.173l-3.13 2.683M8 14 3.057 9.057c-.25-.25-.39-.589-.39-.942V4.277a.668.668 0 0 1 1.137-.472l9.529 9.534M8.143 2.254l5.609 9.977a.667.667 0 0 1-.112.8l-.778.775a.667.667 0 0 1-.471.194H4.234a.666.666 0 0 1-.417-.146l-1.65-1.32a.666.666 0 0 1 .42-1.188l2.777.018",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
