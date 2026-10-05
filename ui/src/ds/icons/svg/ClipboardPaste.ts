import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ClipboardPaste', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 2.667H4A1.333 1.333 0 0 0 2.667 4v9.333A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334M10.667 2.667H12A1.333 1.333 0 0 1 13.334 4v1.333m-6 4H14m0 0-2.666-2.666M14 9.333 11.334 12M10 1.333H6A.667.667 0 0 0 5.334 2v1.333c0 .4.266.667.666.667h4c.4 0 .667-.267.667-.667V2c0-.4-.267-.667-.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
