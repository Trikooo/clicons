<script lang="ts">
  import config from '../config';

  /**
   * @component LiverIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/liver)
   * @see {@link https://clicons.dev/icon/liver} - Icon preview
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
  <path d="M18 8.03446C15.1204 8.03446 13.127 5.01107 10 5.01107C5.58172 5.01107 2 8.62072 2 13.0735C2 14.5065 2.17145 16.2117 2.8675 17.6086C3.41433 18.7061 4.68138 19.1636 5.88098 18.9481C10.4299 18.1308 14 15.0032 15 13.0047M15 13.0047C13.2314 13.1113 11 12.5051 9 11.0579M15 13.0047C17.8307 12.8342 22 10.2093 22 7.02666C22 3.84398 17 5.01107 14 6.46669" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
