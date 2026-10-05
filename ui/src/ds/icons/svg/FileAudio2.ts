import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileAudio2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334V4m6.667-2.667V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-12 6a.667.667 0 1 0 1.333 0 .667.667 0 0 0-1.333 0Zm0 0v-2a2.667 2.667 0 0 1 5.333 0v2m0 0a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
