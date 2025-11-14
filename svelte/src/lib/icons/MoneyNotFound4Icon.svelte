<script lang="ts">
  import config from '../config';

  /**
   * @component MoneyNotFound4Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/money-not-found4)
   * @see {@link https://clicons.dev/icon/money-not-found4} - Icon preview
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
  <path d="M18.5 11.4893V11.4993" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M5.5 12.4893V12.4993" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M2.99988 3.00098L20.9999 21.001" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10.2322 10.2314C9.77972 10.6839 9.49988 11.3089 9.49988 11.9993C9.49988 13.38 10.6192 14.4993 11.9999 14.4993C12.6903 14.4993 13.3153 14.2194 13.7677 13.767" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.6566 17.6577C21.8698 17.3798 21.9999 17.0462 21.9999 16.6833V6.92803C21.9999 6.35987 21.6755 5.84549 21.1328 5.6773C20.1902 5.38518 18.4793 5.00098 15.9999 5.00098C13.3534 5.00098 11.8275 5.5613 9.7911 5.7922M18.2193 18.2204C17.5645 18.1529 16.8247 18.1104 15.9999 18.1104C11.249 18.1104 10.1094 19.9161 3.14468 18.3802C2.47252 18.232 1.99988 17.6275 1.99988 16.9392V6.92214C1.99988 5.94628 2.92067 5.23464 3.87786 5.42458C4.54916 5.55779 5.16296 5.65792 5.72938 5.73048" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
