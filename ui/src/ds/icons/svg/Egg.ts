import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Egg', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 14.667c4.153-.034 5.246-3.714 5-6.667-.24-2.893-2.634-6.64-5-6.667C5.633 1.36 3.24 5.107 3 8c-.247 2.953.846 6.633 5 6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
