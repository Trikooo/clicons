<script lang="ts">
  import config from '../config';

  /**
   * @component HorseHeadIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/horse-head)
   * @see {@link https://clicons.dev/icon/horse-head} - Icon preview
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
  <path d="M14.0002 21C9.5 16 12.5 13 12.5 13C13.4238 15.4634 16.5 15 16.5 15L18.2742 16.3595C18.6707 16.6133 19.182 16.5153 19.4708 16.1301L20.7978 14.5278C21.0918 14.1358 21.0625 13.5705 20.7296 13.2155L19.4484 11.8489C18.8595 11.2207 18.4693 10.4119 18.3324 9.53566C18.1705 8.49976 17.5002 7.5 16.887 6.90803L16.0002 6L17.0002 3C17.0002 3 14.424 3.02925 13.5002 5C7.5 5.5 3 9.53566 3 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
