<script lang="ts">
  import config from '../config';

  /**
   * @component HologramIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/hologram)
   * @see {@link https://clicons.dev/icon/hologram} - Icon preview
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
  <path d="M3 22H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M17 19L16 15M8 15L7 19M12 16V19" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5C17 3.94098 16.1808 3.58798 14.5423 2.88197L13.8775 2.59549C12.9562 2.1985 12.4955 2 12 2C11.5045 2 11.0438 2.1985 10.1225 2.59549L9.45768 2.88197C7.81923 3.58798 7 3.94098 7 4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7ZM12 7V13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13C11.5045 13 11.0438 12.8015 10.1225 12.4045L9.45768 12.118C7.81923 11.412 7 11.059 7 10.5V4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
