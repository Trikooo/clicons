<script lang="ts">
  import config from '../config';

  /**
   * @component BerlinIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/berlin)
   * @see {@link https://clicons.dev/icon/berlin} - Icon preview
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
  <path d="M2 5.3H9M15 5.3H22M22 9.7H16.4396C15.3109 9.7 14.7465 9.7 14.4465 9.29739C14.1464 8.89478 14.2571 8.28603 14.4784 7.06855L14.5216 6.83145C14.7429 5.61397 14.8536 5.00522 14.5535 4.60261C14.2535 4.2 13.6891 4.2 12.5604 4.2H11.4396C10.3109 4.2 9.74652 4.2 9.44646 4.60261C9.1464 5.00522 9.25709 5.61397 9.47845 6.83145L9.52155 7.06855C9.74291 8.28603 9.8536 8.89478 9.55354 9.29739C9.25348 9.7 8.68912 9.7 7.56039 9.7H2M13.5 4.2C13.5 3.65 13.7 2.44 14.5 2M10.5 4.2C10.5 3.65 10.3 2.44 9.5 2M3 5.3V22M21 5.3V22M18 9.7V22M15 22V9.7H9V22M6 9.7V22M2 22H22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
