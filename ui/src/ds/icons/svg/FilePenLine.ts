import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FilePenLine', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m12 3.333-1.609-1.609c-.25-.25-.59-.39-.943-.39H4a1.333 1.333 0 0 0-1.333 1.333v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334m-8-1.333H6m8.252-3.583a1.416 1.416 0 1 0-2.002-2.002L9.576 9.089a1.333 1.333 0 0 0-.337.57l-.558 1.913a.333.333 0 0 0 .413.413l1.914-.558c.215-.063.41-.178.569-.337l2.675-2.673Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
