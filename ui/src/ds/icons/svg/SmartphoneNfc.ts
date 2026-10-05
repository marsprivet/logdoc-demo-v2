import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SmartphoneNfc', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 5.547a4.953 4.953 0 0 1 0 4.906m2.307-6.313a7.84 7.84 0 0 1 0 7.72m2.3-9.127a10.607 10.607 0 0 1 .007 10.534M2 4h3.333c.368 0 .667.298.667.667v6.666a.667.667 0 0 1-.667.667H2a.667.667 0 0 1-.667-.667V4.667C1.333 4.298 1.631 4 2 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
