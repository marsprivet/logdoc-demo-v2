# Third-party notice

The LogDoc design system (`src/ds`) started as a copy of SigNoz's open-source
design system and is maintained here as our own code from then on — nothing
in LogDoc depends on SigNoz packages.

| Folder | Copied from | Revision | License |
| --- | --- | --- | --- |
| `components/`, `docs/`, `styles.css` | [SigNoz/components](https://github.com/SigNoz/components) (`packages/ui`, `apps/docs`) | `478e98a` (2026-10-01) | MIT |
| `icons/` | `@signozhq/icons` 0.4.0 (npm), converted to source by `scripts/import-signoz-icons.mjs` | 0.4.0 | MIT |
| `tokens/` | [SigNoz/design-tokens](https://github.com/SigNoz/design-tokens) (`src`, `scripts`, `config.json`) | `01ec0cd` (2026-09-30) | not stated by upstream |

The MIT license of the SigNoz component library and icons:

```
MIT License

Copyright (c) 2024 SigNoz

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
