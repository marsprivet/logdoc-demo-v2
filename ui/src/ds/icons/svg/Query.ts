import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Query', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M8 5.333c3.314 0 6-.895 6-2 0-1.104-2.686-2-6-2s-6 .896-6 2c0 1.105 2.686 2 6 2Z",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M2 3.333v9.334c-.004.32.224.636.664.922.44.285 1.078.53 1.862.716.785.186 1.691.306 2.644.35.953.045 1.923.012 2.83-.095M14 3.333V7",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M2 8c.001.312.22.619.641.897.42.279 1.03.52 1.781.706.75.186 1.621.311 2.542.365.921.054 1.867.035 2.763-.055M12 10.187c.133-.267.333-.534.6-.667a1.4 1.4 0 0 1 1.733.267c.2.266.334.533.334.866 0 .867-1.334 1.334-1.334 1.334M13.333 14.667v.006",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
}),
);
