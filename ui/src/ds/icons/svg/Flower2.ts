import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Flower2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 3.333a2 2 0 1 1 2 2m-2-2a2 2 0 1 0-2 2m2-2V4m2 1.333a2 2 0 1 1-2 2m2-2h-.667M6 5.333a2 2 0 1 0 2 2m-2-2h.666M8 4c-.737 0-1.334.597-1.334 1.333M8 4c.736 0 1.333.597 1.333 1.333M8 7.333v-.666M6.666 5.333c0 .737.597 1.334 1.334 1.334m1.333-1.334c0 .737-.597 1.334-1.333 1.334m0 0v8m0 0c2.8 0 4.666-1.112 4.666-3.334-2.8 0-4.666 1.112-4.666 3.334Zm0 0c-2.8 0-4.667-1.112-4.667-3.334 2.8 0 4.667 1.112 4.667 3.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
