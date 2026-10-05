import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Logs1', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M3.333 3.667v9",
			stroke: "inherit",
			strokeWidth: 1.333
		}),
		jsx("ellipse", {
			cx: 7.333,
			cy: 3.667,
			rx: 4,
			ry: 1.667,
			stroke: "inherit",
			strokeWidth: 1.333
		}),
		jsx("ellipse", {
			cx: 7.333,
			cy: 3.617,
			rx: 1,
			ry: .417,
			fill: "#fff"
		}),
		jsx("path", {
			d: "M11.333 12.667c0 .736-1.79 1.333-4 1.333s-4-.597-4-1.333",
			stroke: "inherit",
			strokeWidth: 1.333
		}),
		jsx("path", {
			d: "M6 7.333V8.61c0 .033.024.06.056.066l1.888.315A.067.067 0 0 1 8 9.056v2.277",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round"
		}),
		jsx("path", {
			d: "M11.333 3.667v3.546c0 .052.058.084.102.057l2.487-1.555a.067.067 0 0 1 .1.04l.302 1.21a.067.067 0 0 1-.015.061l-2.959 3.288a.067.067 0 0 0-.017.045v2.308",
			stroke: "inherit",
			strokeWidth: 1.333
		})
	]
}),
);
