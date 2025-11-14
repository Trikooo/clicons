<script lang="ts">
  import config from '../config';

  /**
   * @component KeyframeLeftIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/keyframe-left)
   * @see {@link https://clicons.dev/icon/keyframe-left} - Icon preview
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
  <path d="M18.9975 10.6909C19.6658 11.2951 20 11.5971 20 12C20 12.4029 19.6658 12.7049 18.9975 13.3091L17.3537 14.7948C16.4649 15.5983 16.0205 16 15.5 16C14.9795 16 14.5351 15.5983 13.6463 14.7948L12.0025 13.3091C11.3342 12.7049 11 12.4029 11 12C11 11.5971 11.3342 11.2951 12.0025 10.6909L13.6463 9.20516C14.5351 8.40172 14.9795 8 15.5 8C16.0205 8 16.4649 8.40172 17.3537 9.20515L18.9975 10.6909Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M8 12H4M4 3L4 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
