# Clicons Svelte

A refactored, clean Svelte icon library with 4559 individual components. Built from the MIT-licensed HugeIcons free icon set.

## Features

- **4559 Svelte components** – each icon is its own component for optimal tree-shaking
- **Customizable** – size, color, and stroke width per component
- **Lightweight** – only imports the icons you use
- **Fast** – direct SVG rendering, no wrapper overhead
- **TypeScript** – full TypeScript support
- **Tree-shakeable** – unused icons are removed from your bundle

---

## Installation

```bash
# npm
npm install clicons-svelte

# yarn
yarn add clicons-svelte

# pnpm
pnpm add clicons-svelte
```

---

## Quick Start

```svelte
<script lang="ts">
  import { Notification03, Search } from "clicons-svelte";
</script>

<div>
  <Notification03 size={24} color="blue" />
  <Search size={32} strokeWidth={2} />
</div>
```

---

## Importing Icons

Each icon can be imported either with or without the `Icon` suffix. Both imports refer to the same component.

```svelte
<script lang="ts">
  import { Heart, HeartIcon } from "clicons-svelte";
</script>

<div>
  <!-- Using with Icon suffix -->
  <HeartIcon size={24} color="red" />

  <!-- Using without Icon suffix -->
  <Heart size={32} color="pink" />
</div>
```

This works for all 4559 icons. The `Icon` suffix is optional.

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

Icon components will use these values as defaults unless overridden via props.

---

## Icon Props

| Prop                  | Type                           | Default        | Description                     |
| --------------------- | ------------------------------ | -------------- | ------------------------------- |
| `size`                | `number`                       | `16`           | Icon size in pixels             |
| `color`               | `string`                       | `currentColor` | Icon color                      |
| `strokeWidth`         | `number`                       | `1.8`          | Width of strokes                |
| `absoluteStrokeWidth` | `boolean`                      | `false`        | Ignore scaling for stroke width |
| `class`               | `string`                       | -              | Additional CSS classes          |
| `ref`                 | `SVGSVGElement`                | -              | Forward ref for SVG element     |
| `...$$restProps`      | `SVGAttributes<SVGSVGElement>` | -              | Standard SVG attributes         |

---

## Examples

```svelte
<script lang="ts">
  import { Heart, Star } from "clicons-svelte";
</script>

<div>
  <Heart size={24} color="red" />
  <Star size={32} color="gold" strokeWidth={2} />
</div>
```

```svelte
<script lang="ts">
  import { Download } from "clicons-svelte";
</script>

<button on:click={() => console.log("Downloading...")}>
  <Download size={20} color="white" />
  Download
</button>
```

```svelte
<script lang="ts">
  import { Search } from "clicons-svelte";
  let iconRef: SVGSVGElement;
</script>

<div>
  <input type="text" placeholder="Search..." />
  <Search bind:this={iconRef} size={20} />
</div>
```

---

## License

MIT - Based on HugeIcons free icons (MIT licensed)
