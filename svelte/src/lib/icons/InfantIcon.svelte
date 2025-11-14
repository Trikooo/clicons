<script lang="ts">
  import config from '../config';

  /**
   * @component InfantIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/infant)
   * @see {@link https://clicons.dev/icon/infant} - Icon preview
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
  <path d="M19.9504 10.8961C19.5049 14.8926 16.1153 18 12 18C7.88465 18 4.49508 14.8926 4.04963 10.8961C3.87943 10.9632 3.69402 11 3.5 11C2.67157 11 2 10.3284 2 9.5C2 8.67157 2.67157 8 3.5 8C3.75626 8 3.99751 8.06426 4.20851 8.17754C5.03332 4.63736 8.20867 2 12 2C15.7913 2 18.9667 4.63736 19.7915 8.17755C20.0025 8.06426 20.2437 8 20.5 8C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11C20.306 11 20.1206 10.9632 19.9504 10.8961Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 15C12.5523 15 13 14.5523 13 14H11C11 14.5523 11.4477 15 12 15Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 22C18 20.208 17.2144 18.5994 15.9687 17.5M6 22C6 20.208 6.78563 18.5994 8.03126 17.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 2C13 2 14 2.89543 14 4C14 5.10457 13 6 12 6C11.5 6 10.9246 5.81669 10.5 5.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M9 10V10.01" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="2" />
  <path d="M15 10V10.01" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="2" />
</svg>
