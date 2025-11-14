<script lang="ts">
  import config from '../config';

  /**
   * @component PrescriptionIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/prescription)
   * @see {@link https://clicons.dev/icon/prescription} - Icon preview
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
  <path d="M19 21L10 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M5 19V5C5 3.34533 5.34533 3 7 3H9.5C11.9853 3 14 5.01472 14 7.5C14 9.98528 11.9853 12 9.5 12H5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19 15L13 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
