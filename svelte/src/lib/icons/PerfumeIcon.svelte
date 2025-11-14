<script lang="ts">
  import config from '../config';

  /**
   * @component PerfumeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/perfume)
   * @see {@link https://clicons.dev/icon/perfume} - Icon preview
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
  <path d="M2 16.0333C2 17.9969 2.76322 19.7833 4.01078 21.1151C4.70497 21.8562 5.32548 22 6.32891 22H12.6711C13.6745 22 14.295 21.8562 14.9892 21.1151C16.2368 19.7833 17 17.9969 17 16.0333C17 13.0265 15.2105 10.4354 12.6328 9.2554C12.1918 9.05357 11.8016 9 11.3176 9H7.68245C7.19837 9 6.80816 9.05357 6.36725 9.2554C3.7895 10.4354 2 13.0265 2 16.0333Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7 9V8C7 6.34533 7.34533 6 9 6H10C11.6547 6 12 6.34533 12 8V9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11 6V4.5C11 3.4506 10.6269 3 9.5 3C8.37313 3 8 3.4506 8 4.5V6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <circle cx="19" cy="5" r="3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M6 4H8M11 4H16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
