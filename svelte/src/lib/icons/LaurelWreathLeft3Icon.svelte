<script lang="ts">
  import config from '../config';

  /**
   * @component LaurelWreathLeft3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/laurel-wreath-left3)
   * @see {@link https://clicons.dev/icon/laurel-wreath-left3} - Icon preview
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
  <path d="M10.9889 6.5C10.9889 6.5 12.821 6.4339 13.6618 4.9339C14.5025 3.4339 13.5111 2 13.5111 2C13.5111 2 11.6789 2.0661 10.8382 3.5661C9.9975 5.0661 10.9889 6.5 10.9889 6.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11.1829 6.5C9.71953 8.59896 7.86589 13.475 12.1585 16.1875C17.5243 19.5781 18.0122 20.5469 18.5 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M16.0321 18.5C16.0321 18.5 12.4597 17.1364 14.5012 13.5C14.5012 13.5 18.5838 14.8636 16.0321 18.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16 19.0001C16 19.0001 13.6326 15.9252 10.5 19.1051C10.5 19.1051 13.0077 22.6818 16 19.0001Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.49057 12.9391C9.49057 12.9391 9.88764 8.85377 5.52987 9.00405C5.52987 9.00405 4.89393 13.5764 9.49057 12.9391Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.50943 12.5001C9.50943 12.5001 9.11236 8.41482 13.4701 8.5651C13.4701 8.5651 14.1061 13.1374 9.50943 12.5001Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
