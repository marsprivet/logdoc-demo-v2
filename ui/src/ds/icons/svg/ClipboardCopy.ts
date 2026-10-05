import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ClipboardCopy', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 2.667H4A1.333 1.333 0 0 0 2.667 4v9.333A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334V12m-2.667-9.333H12A1.333 1.333 0 0 1 13.334 4v2.667M14 9.333H7.334m0 0L10 6.667M7.334 9.333 10 12M6 1.333h4c.368 0 .667.299.667.667v1.333A.667.667 0 0 1 10 4H6a.667.667 0 0 1-.666-.667V2c0-.368.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
