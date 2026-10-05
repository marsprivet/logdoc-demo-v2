import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ToyBrick', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 5.333v-2c0-.4-.267-.666-.667-.666H4a.667.667 0 0 0-.667.666v2m9.334 0v-2c0-.4-.267-.666-.667-.666h-2a.667.667 0 0 0-.667.666v2m-6.666 0h10.666c.368 0 .667.299.667.667v6.667a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 12.667V6c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
