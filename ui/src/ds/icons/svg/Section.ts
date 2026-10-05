import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Section', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 3.333c0-.53-.28-1.039-.78-1.414S8.705 1.333 8 1.333c-.708 0-1.386.211-1.886.586s-.781.884-.781 1.414c0 2.667 5.333 2 5.333 4.667m0 0c0 .53-.28 1.04-.78 1.414C9.385 9.79 8.705 10 8 10c-.708 0-1.386-.21-1.886-.586-.5-.375-.781-.884-.781-1.414m5.333 0c0-.53-.28-1.04-.78-1.414C9.385 6.21 8.705 6 8 6c-.708 0-1.386.21-1.886.586-.5.375-.781.884-.781 1.414m0 0c0 2.667 5.333 2 5.333 4.667 0 .53-.28 1.039-.78 1.414s-1.18.586-1.886.586c-.708 0-1.386-.211-1.886-.586s-.781-.884-.781-1.414",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
