import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GitPullRequestClosed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8M14 2l-4 4m4 0-4-4m2 5.667V10m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
