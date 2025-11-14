<script lang="ts">
  import config from '../config';

  /**
   * @component Touch3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/touch3)
   * @see {@link https://clicons.dev/icon/touch3} - Icon preview
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
  <path d="M6.37124 12.171L8.50514 14V4.25C8.50514 3.2835 9.28864 2.5 10.2551 2.5C11.2216 2.5 12.0051 3.2835 12.0051 4.25V9.5L14.993 9.97757C16.9216 10.2669 17.886 10.4115 18.5652 10.8184C19.6872 11.4906 20.5 12.5 20.5 13.9736C20.5 15 20.2463 15.6886 19.6296 17.5387C19.2383 18.7127 19.0426 19.2996 18.7236 19.7643C18.1983 20.5293 17.4233 21.0878 16.5315 21.3442C15.9898 21.5 15.3711 21.5 14.1336 21.5H13.0847C11.4395 21.5 10.6169 21.5 9.88462 21.1981C9.75329 21.144 9.62494 21.0829 9.50012 21.0151C8.80405 20.6371 8.28533 19.9987 7.24791 18.7219L3.88941 14.5883C3.37331 13.9531 3.36987 13.0441 3.88114 12.405C4.49565 11.6369 5.62437 11.5308 6.37124 12.171Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
