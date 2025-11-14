<script lang="ts">
  import config from '../config';

  /**
   * @component MilkOatIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/milk-oat)
   * @see {@link https://clicons.dev/icon/milk-oat} - Icon preview
   * @see {@link https://clicons.dev} - Clicons documentation
   */

  interface Props {
    /** Size of the icon in pixels */
    size?: number;
    /** Color of the icon */
    color?: string;
    /** Stroke width of the icon */
    strokeWidth?: number;
    /** Use absolute stroke width, ignores scaling */
    absoluteStrokeWidth?: boolean;
    /** CSS class name */
    class?: string;
    [key: string]: any;
  }

  let {
    size,
    color,
    strokeWidth,
    absoluteStrokeWidth,
    class: className = '',
    ...restProps
  }: Props = $props();

  let finalSize = $derived(size ?? config.defaultSize ?? 16);
  let finalStrokeWidth = $derived(strokeWidth ?? config.defaultStrokeWidth ?? 1.8);
  let finalAbsoluteStrokeWidth = $derived(absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false);
  let finalColor = $derived(color ?? config.defaultColor ?? 'currentColor');
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={finalSize}
  height={finalSize}
  viewBox="0 0 24 24"
  fill="none"
  class={className}
  {...restProps}
>
  <path d="M20.64 20.6357C22.1695 19.1068 22.717 17.1755 20.64 15.0994C18.5628 13.0232 15.1011 12.3312 13.7164 13.7153M20.64 20.6357C19.1104 22.1645 17.1782 22.7118 15.1011 20.6357C13.024 18.5595 12.3317 15.0994 13.7164 13.7153M20.64 20.6357L13.7164 13.7153" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M11.9419 21.9985H8.00115M4.9856 4.94586L2.56174 7.45742C2.20193 7.83025 2.00085 8.32816 2.00085 8.84629V19.9985C2.00085 21.103 2.89628 21.9985 4.00085 21.9985H8.00115M4.9856 4.94586L8.00115 8.0386M4.9856 4.94586V3.50171C4.9856 2.67328 5.65717 2.00171 6.4856 2.00171H14.039C14.8793 2.00171 15.5557 2.69197 15.5387 3.53213L15.5177 4.5655C15.5129 4.80149 15.5918 5.03157 15.7403 5.21502L18.0263 8.0386M8.00115 8.0386V21.9985M8.00115 8.0386H18.0263M18.0263 8.0386V10.4828" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
