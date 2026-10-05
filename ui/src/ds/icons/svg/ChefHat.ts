import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ChefHat', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 11.333h8M11.334 14a.667.667 0 0 0 .666-.667V9.767c0-.305.211-.563.485-.694a2.667 2.667 0 0 0-1.423-5.06 3.333 3.333 0 0 0-6.124 0 2.667 2.667 0 0 0-1.422 5.059c.274.132.484.39.484.694v3.567a.667.667 0 0 0 .667.667h6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
