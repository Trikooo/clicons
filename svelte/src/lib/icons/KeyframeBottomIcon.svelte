<script lang="ts">
  import config from '../config';

  /**
   * @component KeyframeBottomIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/keyframe-bottom)
   * @see {@link https://clicons.dev/icon/keyframe-bottom} - Icon preview
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
  <path d="M10.6909 5.00254C11.2951 4.33418 11.5971 4 12 4C12.4029 4 12.7049 4.33418 13.3091 5.00253L14.7948 6.64627C15.5983 7.53512 16 7.97954 16 8.5C16 9.02046 15.5983 9.46488 14.7948 10.3537L13.3091 11.9975C12.7049 12.6658 12.4029 13 12 13C11.5971 13 11.2951 12.6658 10.6909 11.9975L9.20516 10.3537C8.40172 9.46488 8 9.02046 8 8.5C8 7.97954 8.40172 7.53512 9.20515 6.64627L10.6909 5.00254Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 16V20M3 20H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
