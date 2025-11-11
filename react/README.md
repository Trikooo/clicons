# Clicons React

A refactored, clean React icon library with 4559 individual components. Built from the MIT-licensed HugeIcons free icon set.

## Features

- **4559 React components** – each icon is its own component for optimal tree-shaking
- **Customizable** – size, color, and stroke width per component
- **Lightweight** – only imports the icons you use
- **Fast** – direct SVG rendering, no wrapper overhead
- **TypeScript** – full TypeScript support
- **Tree-shakeable** – unused icons are removed from your bundle

---

## Installation

```bash
# npm
npm install clicons-react

# yarn
yarn add clicons-react

# pnpm
pnpm add clicons-react
```

---

## Quick Start

```tsx
import { Notification03Icon, SearchIcon } from "clicons-react";

function App() {
  return (
    <div>
      <Notification03Icon size={24} color="blue" />
      <SearchIcon size={32} strokeWidth={2} />
    </div>
  );
}
```

---

## Importing Icons

Each icon can be imported either with or without the `Icon` suffix. Both imports refer to the same component.

```tsx
import { HeartIcon, Heart } from "clicons-react";

export default function Example() {
  return (
    <div>
      {/* Using with Icon suffix */}
      <HeartIcon size={24} color="red" />

      {/* Using without Icon suffix */}
      <Heart size={32} color="pink" />
    </div>
  );
}
```

This works for all 4559 icons. The `Icon` suffix is optional, so you can use whichever naming style fits your code.

---

## Global Defaults with Config

You can define global defaults (size, stroke width, color, etc.) using a config file at the project root:

```ts
// clicons.config.ts
export default {
  defaultSize: 24,
  defaultStrokeWidth: 1.5,
  defaultAbsoluteStrokeWidth: false,
  defaultColor: "currentColor",
};
```

**Important:** To make this config work in your project, configure path resolution in your `tsconfig.json` or `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "clicons.config": ["./clicons.config.ts"]
    }
  }
}
```

This will automatically be used internally
Icon components will use these values as defaults unless overridden via props.

---

## Icon Props

| Prop                  | Type                       | Default        | Description                     |
| --------------------- | -------------------------- | -------------- | ------------------------------- |
| `size`                | `number`                   | `16`           | Icon size in pixels             |
| `color`               | `string`                   | `currentColor` | Icon color                      |
| `strokeWidth`         | `number`                   | `1.8`          | Width of strokes                |
| `absoluteStrokeWidth` | `boolean`                  | `false`        | Ignore scaling for stroke width |
| `className`           | `string`                   | -              | Additional CSS classes          |
| `ref`                 | `React.Ref<SVGSVGElement>` | -              | Forward ref for SVG element     |
| `...rest`             | `SVGAttributes`            | -              | Standard SVG attributes         |

---

## Examples

```tsx
import { HeartIcon, StarIcon } from "clicons-react";

export default function IconsExample() {
  return (
    <div>
      <HeartIcon size={24} color="red" />
      <StarIcon size={32} color="gold" strokeWidth={2} />
    </div>
  );
}
```

```tsx
import { DownloadIcon } from "clicons-react";

export default function DownloadButton() {
  return (
    <button onClick={() => console.log("Downloading...")}>
      <DownloadIcon size={20} color="white" />
      Download
    </button>
  );
}
```

```tsx
import { SearchIcon } from "clicons-react";
import { useRef } from "react";

export default function SearchBar() {
  const iconRef = useRef<SVGSVGElement>(null);

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <SearchIcon ref={iconRef} size={20} />
    </div>
  );
}
```

---

## License

MIT - Based on HugeIcons free icons (MIT licensed)
