<script lang="ts">
  import config from '../config';

  /**
   * @component ChartRoseIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/chart-rose)
   * @see {@link https://clicons.dev/icon/chart-rose} - Icon preview
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
  <path d="M9.713 7.97461C6.60492 7.97461 4.08533 10.2303 4.08533 13.0129H9.713V7.97461Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M2.53453 15.926C3.77319 18.368 6.52105 20.0662 9.71196 20.0662L9.71196 13.0127H4.87217C3.40834 13.0127 2.67643 13.0127 2.23141 13.7319C1.78639 14.4511 2.03577 14.9427 2.53453 15.926Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12.7145 21.6766C16.8431 20.5311 19.8419 17.0854 19.8419 13.0127H9.7121V19.0586C9.7121 20.5322 9.7121 21.269 10.3127 21.7226C10.9134 22.1763 11.5137 22.0097 12.7145 21.6766Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M21.6409 10.0343C20.4534 6.21439 17.0381 3.22528 12.7271 2.25958C11.4776 1.97968 10.8528 1.83973 10.2825 2.29354C9.7121 2.74735 9.7121 3.48208 9.7121 4.95155V13.0127H19.054C20.5339 13.0127 21.2738 13.0127 21.7293 12.3984C22.1848 11.784 22.0035 11.2008 21.6409 10.0343Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
