import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bitcoin', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.844 12.726c3.283.579 4.094-4.017.81-4.596m-.81 4.596-3.938-.695m3.938.695-.23 1.313M6.029 7.667l2.627.463c3.282.58 4.093-4.017.81-4.595l-3.94-.695m3.939.695.232-1.314m-4.71 11.355L7.07 1.758",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
