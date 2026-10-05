import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BookLock', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 4V2.667a1.334 1.334 0 0 0-2.666 0V4m4 6v4a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13m0 0a1.667 1.667 0 0 1 1.667-1.667h9M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h2.333m2 2.667h4c.368 0 .667.299.667.667v2a.667.667 0 0 1-.667.666h-4A.667.667 0 0 1 8 6.667v-2C8 4.299 8.3 4 8.667 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
