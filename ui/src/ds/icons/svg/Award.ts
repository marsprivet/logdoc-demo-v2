import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Award', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10.318 8.593 1.01 5.684a.333.333 0 0 1-.54.314l-2.387-1.792a.667.667 0 0 0-.798 0l-2.39 1.791a.333.333 0 0 1-.54-.313l1.009-5.684M12 5.333a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
