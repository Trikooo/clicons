<script lang="ts">
  import config from '../config';

  /**
   * @component CircleArrowDataTransferDiagonalIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/circle-arrow-data-transfer-diagonal)
   * @see {@link https://clicons.dev/icon/circle-arrow-data-transfer-diagonal} - Icon preview
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
  <path d="M13.6898 8L8.87715 13.1068C8.48493 13.523 8.28882 13.7311 8.13302 13.6693C7.97723 13.6076 7.98998 13.3268 8.01548 12.7653L8.09598 10.9932M10.3102 16L15.1228 10.8932C15.5151 10.477 15.7112 10.2689 15.867 10.3307C16.0228 10.3924 16.01 10.6732 15.9845 11.2347L15.904 13.0068" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <circle cx="12" cy="12" r="10" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
