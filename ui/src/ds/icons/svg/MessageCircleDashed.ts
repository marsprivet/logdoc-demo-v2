import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MessageCircleDashed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9 2.067C8.666 2.067 8.333 2 8 2c-.334 0-.667.067-1 .067m5.866 2.466a6.964 6.964 0 0 0-1.4-1.4M13.933 9C14 8.667 14 8.333 14 8c0-.333-.067-.667-.067-1m-2.467 5.867a6.967 6.967 0 0 0 1.4-1.4M7 13.933C7.333 14 7.666 14 8 14c.333 0 .666-.067 1-.067m-6.667-2.266-1 3 3-1M2.066 7c0 .333-.066.667-.066 1 0 .333.066.667.066 1m2.467-5.867c-.53.398-1.002.87-1.4 1.4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
