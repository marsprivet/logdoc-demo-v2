import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileStack', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 4.667h-2a1.333 1.333 0 0 1-1.333-1.334v-2m-6 4V11.2c0 .2.133.4.266.533.134.134.334.267.534.267H10M2 8v5.867c0 .2.133.4.267.533.133.133.333.267.533.267h4.533M14 4v4.333c0 .534-.467 1-1 1H8.333c-.533 0-1-.466-1-1v-6c0-.533.467-1 1-1h3L14 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
