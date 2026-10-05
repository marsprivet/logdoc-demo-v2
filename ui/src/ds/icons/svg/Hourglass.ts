import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Hourglass', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 14.667h9.333M3.333 1.333h9.333m-1.333 13.334v-2.782c0-.353-.14-.692-.39-.942L8 8m0 0-2.943 2.943c-.25.25-.39.589-.39.942v2.782M8 8 5.057 5.057c-.25-.25-.39-.589-.39-.942V1.333M8 8l2.942-2.943c.25-.25.39-.589.391-.942V1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
