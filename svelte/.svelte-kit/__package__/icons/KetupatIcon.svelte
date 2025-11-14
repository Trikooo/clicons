<script lang="ts">
  import config from '../config';

  /**
   * @component KetupatIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/ketupat)
   * @see {@link https://clicons.dev/icon/ketupat} - Icon preview
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
  <path d="M18.2749 9.6488L16.3493 7.72321C14.5338 5.90774 13.6261 5 12.4981 5C11.3701 5 10.4624 5.90774 8.64691 7.72321L6.72131 9.6488C4.90584 11.4643 3.99811 12.372 3.99811 13.5C3.99811 14.628 4.90584 15.5357 6.72131 17.3512L8.64691 19.2768C10.4624 21.0923 11.3701 22 12.4981 22C13.6261 22 14.5338 21.0923 16.3493 19.2768L18.2749 17.3512C20.0904 15.5357 20.9981 14.628 20.9981 13.5C20.9981 12.372 20.0904 11.4643 18.2749 9.6488Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17.2481 8.75L12.4981 13.5M12.4981 13.5L7.74811 18.25M12.4981 13.5L7.74811 8.75M12.4981 13.5L17.2481 18.25" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.5 2C13.1 2.24 12.5 4.3 12.5 5C12.3333 4.4 11.5 3.2 9.5 3.2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
