import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PlaneTakeoff', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14.667h13.333M4.24 11.6l-1.574-.267-1.333-2.666.733-.367a1.333 1.333 0 0 1 1.2 0l.114.067a1.333 1.333 0 0 0 1.2 0L5.333 8l-2-4 .6-.3a1.333 1.333 0 0 1 1.393.133l2.68 2a1.333 1.333 0 0 0 1.4.134L12.2 4.593c.357-.18.768-.22 1.153-.113l.647.187a.933.933 0 0 1 .58 1.326l-.254.507c-.153.307-.4.56-.713.72l-8.56 4.247a1.334 1.334 0 0 1-.813.12v.013Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
