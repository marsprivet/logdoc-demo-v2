import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FolderTree', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 3.333a1.333 1.333 0 0 0 1.333 1.334h2M2 2v8.667A1.333 1.333 0 0 0 3.333 12h2m8-5.333A.667.667 0 0 0 14 6V4a.666.666 0 0 0-.667-.667h-1.666a.667.667 0 0 1-.534-.266l-.6-.8A.666.666 0 0 0 10 2H8.667A.667.667 0 0 0 8 2.667V6a.667.667 0 0 0 .667.667h4.666Zm0 7.333a.666.666 0 0 0 .667-.667v-2a.667.667 0 0 0-.667-.666H11.4a.667.667 0 0 1-.587-.367l-.28-.567a.666.666 0 0 0-.613-.4H8.667A.667.667 0 0 0 8 10v3.333a.667.667 0 0 0 .667.667h4.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
