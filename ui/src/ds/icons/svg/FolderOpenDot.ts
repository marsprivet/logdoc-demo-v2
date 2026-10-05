import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FolderOpenDot', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 9.333 4.966 7.4a1.333 1.333 0 0 1 1.194-.733h7.173m0 0a1.333 1.333 0 0 1 1.293 1.666l-1.033 4a1.334 1.334 0 0 1-1.293 1H2.666A1.333 1.333 0 0 1 1.333 12V3.333C1.333 2.6 1.933 2 2.666 2h2.62a1.333 1.333 0 0 1 1.107.6l.547.8a1.334 1.334 0 0 0 1.106.6H12a1.333 1.333 0 0 1 1.333 1.333v1.334ZM10 10a.667.667 0 1 1-1.334 0A.667.667 0 0 1 10 10Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
