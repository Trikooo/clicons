<script lang="ts">
  import config from '../config';

  /**
   * @component Progress4Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/progress4)
   * @see {@link https://clicons.dev/icon/progress4} - Icon preview
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
  <circle cx="12" cy="12" r="10" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 4.5C13.4834 4.5 14.9334 4.93987 16.1668 5.76398C17.4001 6.58809 18.3614 7.75943 18.9291 9.12987C19.4968 10.5003 19.6453 12.0083 19.3559 13.4632C19.0665 14.918 18.3522 16.2544 17.3033 17.3033C16.2544 18.3522 14.918 19.0665 13.4632 19.3559C12.0083 19.6453 10.5003 19.4968 9.12987 18.9291C7.75943 18.3614 6.58809 17.4001 5.76398 16.1668C4.93987 14.9334 4.5 13.4834 4.5 12H12V4.5Z" fill={"currentColor".replace('currentColor', finalColor)} />
</svg>
