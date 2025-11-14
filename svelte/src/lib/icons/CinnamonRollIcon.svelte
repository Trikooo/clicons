<script lang="ts">
  import config from '../config';

  /**
   * @component CinnamonRollIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/cinnamon-roll)
   * @see {@link https://clicons.dev/icon/cinnamon-roll} - Icon preview
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
  <path d="M22 9C22 12.3137 17.5228 15 12 15C6.47715 15 2 12.3137 2 9C2 5.68629 6.47715 3 12 3C17.5228 3 22 5.68629 22 9Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 6.85441C15 5.44094 17 7.71729 17 8.7817C17 11.9514 7 11.7874 7 7.88187C7 5.49755 9 3 12 3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
