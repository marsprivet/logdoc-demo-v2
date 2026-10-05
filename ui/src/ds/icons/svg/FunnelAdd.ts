import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FunnelAdd', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M13.933 3.633 12.6 6.297l-.667 1.331m-3.58 6.933a.667.667 0 0 1-.953-.274L2.066 3.633",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M8 1.333c3.314 0 6 .896 6 2 0 1.105-2.686 2-6 2s-6-.895-6-2c0-1.104 2.686-2 6-2ZM10 12h4M12 14v-4",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
