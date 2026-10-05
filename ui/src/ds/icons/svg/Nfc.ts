import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Nfc', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 5.547a4.953 4.953 0 0 1 0 4.906M6.307 4.14a7.84 7.84 0 0 1 0 7.72m2.3-9.127a10.607 10.607 0 0 1 .006 10.534m2.3-11.934a13.44 13.44 0 0 1 0 13.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
