import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Signpost', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8.667V14M8 2v2m4 0c.353 0 .692.14.942.39l1.529 1.472a.667.667 0 0 1 0 .943L12.957 8.26a1.333 1.333 0 0 1-1.16.39L4 8.667c-.354 0-.693-.14-.943-.391L1.528 6.805a.667.667 0 0 1 0-.943l1.529-1.471C3.307 4.14 3.646 4 4 4h8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
