import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Soup', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 14h6.666M13 8l1.667-4m-3.834-2c.18.067.534.353.5.907-.04.553-.62.8-.666 1.346-.034.52.226.827.486 1.08M7.5 2c.18.067.533.353.493.907-.033.553-.62.8-.653 1.346-.04.52.22.827.48 1.08M4.167 2c.18.067.533.353.5.907-.04.553-.62.8-.667 1.346-.033.52.227.827.493 1.08M8 14a6 6 0 0 0 6-6H2a6 6 0 0 0 6 6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
