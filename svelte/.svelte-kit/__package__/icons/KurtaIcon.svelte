<script lang="ts">
  import config from '../config';

  /**
   * @component KurtaIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/kurta)
   * @see {@link https://clicons.dev/icon/kurta} - Icon preview
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
  <path d="M18.0488 15C18.0889 16.2407 18.0857 17.7741 18.07 19.0892C18.0538 20.4524 18.0456 21.1339 17.6064 21.567C17.1672 22 16.476 22 15.0937 22H9.90634C8.52398 22 7.83279 22 7.39359 21.567C6.95438 21.1339 6.94625 20.4524 6.92997 19.0892C6.91428 17.7741 6.91113 16.2407 6.95124 15M18.0488 15C17.945 11.7897 17.6556 8.36182 17.01 6M18.0488 15H19.9165C20.6808 15 21.063 15 21.3004 14.7487C21.5377 14.4973 21.516 14.1317 21.4725 13.4005C21.233 9.37316 20.1338 6.15858 19.2273 4.28185C18.9606 3.72971 18.8273 3.45365 18.4998 3.17821C18.1723 2.90277 17.815 2.80091 17.1003 2.59718L15.0056 2C14.5044 3 13.5022 3.5 12.5 3.5C11.4978 3.5 10.4956 3 9.99444 2L7.89966 2.59718C7.18503 2.80091 6.82771 2.90277 6.50022 3.17821C6.17273 3.45365 6.03939 3.72971 5.7727 4.28185C4.86625 6.15858 3.76703 9.37316 3.5275 13.4005C3.48401 14.1317 3.46227 14.4973 3.69965 14.7487C3.93703 15 4.3192 15 5.08354 15H6.95124M6.95124 15C7.05501 11.7897 7.34442 8.36182 7.98999 6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 12H21M4 12H7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12.5 4L12.5 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
