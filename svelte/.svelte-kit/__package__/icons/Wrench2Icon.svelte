<script lang="ts">
  import config from '../config';

  /**
   * @component Wrench2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/wrench2)
   * @see {@link https://clicons.dev/icon/wrench2} - Icon preview
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
  <path d="M18 7.10593C17.9999 8.55778 16.5891 9.89558 14.4697 11.9901C13.1062 13.3376 10.8936 13.336 9.52937 11.9892C7.41145 9.8961 5.99988 8.55754 6 7.10568C6.00012 5.65383 6.3543 5.36258 9.60848 2.14658C9.92161 1.83445 10.4602 2.05389 10.4602 2.49338L10.4604 5.80524C10.4604 6.64587 11.1488 7.32849 11.9994 7.32842C12.85 7.32835 13.5396 6.64688 13.5398 5.80625L13.5405 2.49435C13.5406 2.05485 14.0793 1.83532 14.3924 2.14739C17.646 5.36287 18.0001 5.65408 18 7.10593Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M15 12L15 19.1652C15 20.7308 13.6569 22 12 22C10.3431 22 9 20.7308 9 19.1652L9 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12.0063 18.9995L12 19.0059" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
