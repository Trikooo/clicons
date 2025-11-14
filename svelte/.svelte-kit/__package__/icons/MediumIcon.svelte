<script lang="ts">
  import config from '../config';

  /**
   * @component MediumIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/medium)
   * @see {@link https://clicons.dev/icon/medium} - Icon preview
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
  <circle cx="6.5" cy="12" r="4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <ellipse cx="15.5" cy="12" rx="2.5" ry="4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <ellipse cx="21" cy="12" rx="1" ry="4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
