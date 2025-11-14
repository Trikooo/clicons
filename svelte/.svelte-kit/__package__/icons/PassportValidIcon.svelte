<script lang="ts">
  import config from '../config';

  /**
   * @component PassportValidIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/passport-valid)
   * @see {@link https://clicons.dev/icon/passport-valid} - Icon preview
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
  <path d="M12 3.5C7.28595 3.5 4.92893 3.5 3.46447 4.81802C2 6.13604 2 8.25736 2 12.5C2 16.7426 2 18.864 3.46447 20.182C4.92893 21.5 7.28595 21.5 12 21.5C16.714 21.5 19.0711 21.5 20.5355 20.182C22 18.864 22 16.7426 22 12.5C22 11.3538 22 8.5 22 8.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5 17C6.20831 14.4189 10.7122 14.2491 12 17M10.5 10C10.5 11.1046 9.60457 12 8.5 12C7.39543 12 6.5 11.1046 6.5 10C6.5 8.89543 7.39543 8 8.5 8C9.60457 8 10.5 8.89543 10.5 10Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M14 6.5C14 6.5 15 6.5 16 8.5C16 8.5 19.1765 3.5 22 2.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
