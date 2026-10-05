import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('DatabaseBackup', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 3.333c0 1.105-2.686 2-6 2s-6-.895-6-2m12 0c0-1.104-2.686-2-6-2s-6 .896-6 2m12 0V6.2M2 3.333v9.334c0 .432.42.853 1.197 1.2.778.345 1.871.598 3.116.72M2 8c-.001.373.31.738.9 1.055.589.317 1.432.573 2.433.738M8 8v2.667m0 0h2.667m-2.667 0 1.393-1.394a3.21 3.21 0 0 1 2.274-.94 3 3 0 0 1 3 3 3.334 3.334 0 0 1-6 2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
