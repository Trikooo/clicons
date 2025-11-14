<script lang="ts">
  import config from '../config';

  /**
   * @component AirplayLineIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/airplay-line)
   * @see {@link https://clicons.dev/icon/airplay-line} - Icon preview
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
  <path d="M4.5 18C3.96555 17.8228 3.53433 17.5662 3.17157 17.1945C2 15.994 2 14.0618 2 10.1975C2 6.33316 2 4.40099 3.17157 3.2005C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.2005C22 4.40099 22 6.33316 22 10.1975C22 14.0618 22 15.994 20.8284 17.1945C20.4657 17.5662 20.0345 17.8228 19.5 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M8.91499 16.7661C10.1081 15.0762 10.7046 14.2312 11.5143 14.0528C11.8336 13.9824 12.1664 13.9824 12.4857 14.0528C13.2954 14.2312 13.8919 15.0762 15.085 16.7661C16.4811 18.7436 17.1791 19.7324 16.9605 20.5425C16.875 20.8594 16.7031 21.151 16.4611 21.3897C15.8425 22 14.5617 22 12 22C9.43831 22 8.15747 22 7.5389 21.3897C7.29691 21.151 7.12502 20.8594 7.03949 20.5425C6.82085 19.7324 7.5189 18.7436 8.91499 16.7661Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
