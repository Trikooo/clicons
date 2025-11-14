<script lang="ts">
  import config from '../config';

  /**
   * @component SphereIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/sphere)
   * @see {@link https://clicons.dev/icon/sphere} - Icon preview
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
  <path d="M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5ZM12 10.5V2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <circle cx="12" cy="12" r="10" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M15 8C19.0571 8.52165 22 10.0733 22 11.9063C22 14.1672 17.5228 16 12 16C6.47715 16 2 14.1672 2 11.9063C2 10.0733 4.94289 8.52165 9 8" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
