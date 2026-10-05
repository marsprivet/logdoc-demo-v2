import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Facebook', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 1.333h-2a3.333 3.333 0 0 0-3.333 3.334v2h-2v2.666h2v5.334h2.667V9.333h2L12 6.667H9.334v-2A.667.667 0 0 1 10 4h2V1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
