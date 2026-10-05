import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PencilLine', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 13.333h6m-4-10 2 2m-1.082-2.918a1.415 1.415 0 0 1 2.001 2.001l-8.007 8.007a1.333 1.333 0 0 1-.57.338l-1.914.558a.332.332 0 0 1-.417-.237.334.334 0 0 1 .003-.176l.559-1.915c.063-.215.179-.41.337-.569l8.008-8.007Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
