import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GitPullRequestDraft', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8m8-10v-.667m0 4v-.666M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
