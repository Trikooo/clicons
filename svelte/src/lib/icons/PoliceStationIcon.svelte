<script lang="ts">
  import config from '../config';

  /**
   * @component PoliceStationIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/police-station)
   * @see {@link https://clicons.dev/icon/police-station} - Icon preview
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
  <path d="M15.6181 6.99985C16.2653 7.12386 16.7429 7.34165 17.1213 7.72416C18 8.61245 18 10.0421 18 12.9015V21.9998H6V12.9015C6 10.0421 6 8.61245 6.87868 7.72416C7.25705 7.34165 7.73473 7.12386 8.38188 6.99985" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 21.9998H21C21.4714 21.9998 21.7071 21.9998 21.8536 21.8534C22 21.707 22 21.4713 22 20.9998V15.9998C22 14.1142 22 13.1714 21.4142 12.5856C20.8284 11.9998 19.8856 11.9998 18 11.9998" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M6 21.9998H3C2.5286 21.9998 2.29289 21.9998 2.14645 21.8534C2 21.707 2 21.4713 2 20.9998V15.9998C2 14.1142 2 13.1714 2.58579 12.5856C3.17157 11.9998 4.11438 11.9998 6 11.9998" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 22L12 19" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 15H10.2M15 15H13.8" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
