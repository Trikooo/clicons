<script lang="ts">
  import config from '../config';

  /**
   * @component PointingLeftIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pointing-left)
   * @see {@link https://clicons.dev/icon/pointing-left} - Icon preview
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
  <path d="M2.01758 4.49869H8.00963M2.01758 4.49869C2.01758 3.79883 4.00924 2.49127 4.51427 2M2.01758 4.49869C2.01758 5.19855 4.00924 6.50611 4.51427 6.99738" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.9999 10.8261L21.0513 10.8261C20.4058 10.8261 19.7774 10.6173 19.2594 10.2306L14.3566 6.57049C13.7911 6.14837 13.0895 5.81121 12.4419 6.0899C11.3935 6.54106 10.7124 7.81387 12.2842 9.37179L13.9936 10.9701L3.57057 10.9701C1.52742 11.0263 1.42614 14.3166 3.57057 14.4573L9.51058 14.4573C9.31944 15.9384 10.3629 22.9151 14.7831 21.8982C14.9931 21.8498 15.2062 21.8016 15.4165 21.7545C16.3353 21.5487 17.9727 20.9405 18.93 20.2697C19.9265 19.5714 20.9191 19.8178 21.9999 19.8178" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
