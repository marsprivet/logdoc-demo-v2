import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GitPullRequestCreate', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8M8.667 4h2A1.333 1.333 0 0 1 12 5.333v2M12 10v4m2-2h-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
