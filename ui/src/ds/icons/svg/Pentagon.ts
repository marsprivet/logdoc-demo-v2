import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Pentagon', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.333 5.8c-.467.333-.667.933-.467 1.467l1.867 5.8C3.933 13.6 4.4 14 5 14h6.066c.6 0 1.067-.4 1.267-.933l1.867-5.8c.2-.534 0-1.134-.467-1.467L8.8 2.267a1.4 1.4 0 0 0-1.6 0L2.333 5.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
