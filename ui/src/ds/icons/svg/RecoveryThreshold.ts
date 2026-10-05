import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RecoveryThreshold', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14h2.334",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "m4.667 10.195 2.097-2.292a.333.333 0 0 1 .472 0l2.195 2.194a.332.332 0 0 0 .472 0l2.861-2.861",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round"
		}),
		jsx("path", {
			d: "M2.667 4.667h11.667",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeDasharray: "2.67 2.67"
		}),
		jsx("path", {
			d: "M8 14h5.469a1.221 1.221 0 0 0 1.037-.593 1.189 1.189 0 0 0 0-1.184l-.817-1.413",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "M9.333 12.667 8 14l1.333 1.333",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	]
}),
);
