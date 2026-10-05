import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Microwave', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 5.333V10m-8 2.667V14m8-1.333V14M2.666 2.667h10.667c.736 0 1.333.597 1.333 1.333v7.333c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V4c0-.736.597-1.333 1.333-1.333Zm2 2.666h4c.369 0 .667.299.667.667v3.333a.667.667 0 0 1-.667.667h-4A.667.667 0 0 1 4 9.333V6c0-.368.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
