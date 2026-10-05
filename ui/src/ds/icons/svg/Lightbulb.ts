import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Lightbulb', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 9.333c.133-.666.467-1.133 1-1.666.667-.6 1-1.467 1-2.334a4 4 0 1 0-8 0C4 6 4.133 6.8 5 7.667c.467.466.867 1 1 1.666M6 12h4m-3.333 2.667h2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
