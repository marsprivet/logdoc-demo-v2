import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Variables', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.667 2h2v12h-2M3.333 14h-2V2h2M8.692 4.702a.774.774 0 0 0-.293-.27.85.85 0 0 0-.798 0 .774.774 0 0 0-.293.27l-3.2 5.187a.7.7 0 0 0-.001.74c.07.113.171.206.293.271.121.066.259.1.4.1h6.4a.85.85 0 0 0 .4-.1.773.773 0 0 0 .293-.27.7.7 0 0 0 0-.741l-3.2-5.187Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
