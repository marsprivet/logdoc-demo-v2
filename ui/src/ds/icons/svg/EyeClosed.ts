import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('EyeClosed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M2.452 5.333s1.714 4 5.714 4 5.715-4 5.715-4",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M2.5 6.667.833 8M13.5 6.667 15.167 8M6.167 9.333l-.667 2M10.833 9.333l.667 2",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round"
	})]
}),
);
