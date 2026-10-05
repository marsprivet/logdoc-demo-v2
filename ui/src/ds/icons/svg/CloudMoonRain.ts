import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudMoonRain', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.792 5.667a4 4 0 0 1 3.874-3 2.828 2.828 0 1 0 4 4 4 4 0 0 1-2 3.464m-5.333 3.202v1.334M2 13.333a3.334 3.334 0 1 1 5.933-2.666h.733A2 2 0 0 1 10 14.16m-5.334-1.493V14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
