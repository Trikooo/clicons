<script lang="ts">
  import config from '../config';

  /**
   * @component SkoolIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/skool)
   * @see {@link https://clicons.dev/icon/skool} - Icon preview
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
  <path d="M15 3H12V20H15V14.5H15.9064C16.2723 14.5 16.609 14.6999 16.7843 15.0211L19.2157 19.4789C19.391 19.8001 19.7277 20 20.0936 20H23L19 13L23 8H20C19.6852 8 19.3889 8.14819 19.2 8.4L16.8 11.6C16.6111 11.8518 16.3148 12 16 12H15V3Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.50063 11.0005C4.9056 9.54528 7.66729 10.5005 8.50063 11.0005L10.0006 9.5C10.0006 9.5 8.73595 8 6.00085 8C3.93463 8 1.35357 8.41898 1.35357 11.919C1.35357 15.419 7.70823 14.6943 6.70911 16.9978C6.13523 18.321 3.15757 17.1094 2.15757 16.4428L1 18.7185C1.83333 19.2185 3.90085 20 5.50085 20C7.29193 20 10.0006 18.9128 10.0006 15.7212C10.0006 12.5296 3.99014 12.8348 4.50063 11.0005Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
