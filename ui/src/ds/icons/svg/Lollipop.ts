import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Lollipop', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.667 7.333A5.333 5.333 0 1 1 2 7.333a5.333 5.333 0 0 1 10.667 0Zm0 0a4 4 0 0 1-8 0 2.667 2.667 0 1 1 5.333 0 1.333 1.333 0 0 1-2.667 0M14 14l-2.867-2.867",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
