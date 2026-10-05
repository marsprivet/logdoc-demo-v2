import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Clover', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10.78 5.22-9.447 9.447M10.78 5.22A1.885 1.885 0 1 0 8 2.68a1.885 1.885 0 1 0-2.78 2.54m5.56 0A1.884 1.884 0 1 1 13.32 8a1.885 1.885 0 1 1-2.54 2.78M2.68 8a1.885 1.885 0 1 1 2.54-2.78m0 0 5.56 5.56m0 0A1.885 1.885 0 1 1 8 13.32a1.885 1.885 0 1 1-2.78-2.54A1.887 1.887 0 1 1 2.666 8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
