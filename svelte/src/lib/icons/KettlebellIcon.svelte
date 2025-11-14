<script lang="ts">
  import config from '../config';

  /**
   * @component KettlebellIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/kettlebell)
   * @see {@link https://clicons.dev/icon/kettlebell} - Icon preview
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
  <path d="M17.0003 9C18.2118 6.13886 18.8204 5.15138 18.3298 4.0713C18.1796 3.74048 17.964 3.43972 17.6947 3.18507C16.0234 1.60498 7.97656 1.60498 6.30528 3.18507C6.03594 3.43972 5.82038 3.74048 5.67013 4.0713C5.17956 5.15138 5.78859 6.13886 7.00009 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 8C7.58172 8 4 11.5817 4 16C4 17.8455 4.62489 19.545 5.67463 20.8985C6.39442 21.8266 7.06365 22 8.22111 22H15.7789C16.9363 22 17.6056 21.8266 18.3254 20.8985C19.3751 19.545 20 17.8455 20 16C20 11.5817 16.4183 8 12 8Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15 16H16.5M7.5 16H9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <circle cx="12" cy="16" r="3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
