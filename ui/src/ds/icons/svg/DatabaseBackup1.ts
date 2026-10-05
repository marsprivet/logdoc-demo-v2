import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('DatabaseBackup1', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M8 5.333c3.314 0 6-.895 6-2 0-1.104-2.686-2-6-2s-6 .896-6 2c0 1.105 2.686 2 6 2ZM14 8V3.333",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M2 3.333v9.334c0 .432.42.853 1.197 1.2.778.345 1.871.598 3.116.72M12.667 14l2-2-2-2",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M8.667 14.667v-1.334A1.333 1.333 0 0 1 10 12h4M2 8c.001.312.22.619.641.897.42.279 1.03.52 1.781.706.75.186 1.621.311 2.542.365",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
}),
);
