<script lang="ts">
  import config from '../config';

  /**
   * @component RainbowIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/rainbow)
   * @see {@link https://clicons.dev/icon/rainbow} - Icon preview
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
  <path d="M2 15V12C2 7.58172 5.58172 4 10 4C13.3574 4 16.3229 6.06817 17.5 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5 15V12C5 9.23858 7.23858 7 10 7C11.8507 7 13.6488 8.0055 14.5 9.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 15V12C8 10.8954 8.89543 10 10 10C10.9319 10 11.778 10.6374 12 11.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19.5127 15.2C19.5168 15.2 19.5209 15.2 19.525 15.2C20.8919 15.2 22 16.2745 22 17.6C22 18.9255 20.8919 20 19.525 20H13.75C12.2312 20 11 18.8061 11 17.3333C11 15.9469 12.0912 14.8075 13.4862 14.6788M19.5127 15.2C19.5208 15.1122 19.525 15.0232 19.525 14.9333C19.525 13.3133 18.1707 12 16.5 12C14.9178 12 13.6193 13.1779 13.4862 14.6788M19.5127 15.2C19.4564 15.8051 19.2107 16.3571 18.8336 16.8M13.4862 14.6788C13.573 14.6708 13.661 14.6667 13.75 14.6667C14.3692 14.6667 14.9406 14.8651 15.4003 15.2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
