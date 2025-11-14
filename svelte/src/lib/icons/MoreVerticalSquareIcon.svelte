<script lang="ts">
  import config from '../config';

  /**
   * @component MoreVerticalSquareIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/more-vertical-square)
   * @see {@link https://clicons.dev/icon/more-vertical-square} - Icon preview
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
  <rect x="10.5" y="3" width="3" height="3" rx="1" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <rect x="10.5" y="18" width="3" height="3" rx="1" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
