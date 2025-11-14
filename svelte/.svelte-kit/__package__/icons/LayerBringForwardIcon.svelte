<script lang="ts">
  import config from '../config';

  /**
   * @component LayerBringForwardIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/layer-bring-forward)
   * @see {@link https://clicons.dev/icon/layer-bring-forward} - Icon preview
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
  <path d="M15.8899 11.5L19.2873 13.0606C21.0958 13.8914 22 14.3067 22 15C22 15.6933 21.0958 16.1086 19.2873 16.9394L14.3943 19.187C13.2144 19.729 12.6245 20 12 20C11.3755 20 10.7856 19.729 9.60573 19.187L4.7127 16.9394C2.90423 16.1086 2 15.6933 2 15C2 14.3067 2.90423 13.8914 4.7127 13.0606L8.11012 11.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 4.5V15M15 7C14.4102 6.39316 12.8403 4 12 4C11.1597 4 9.58984 6.39316 9 7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
