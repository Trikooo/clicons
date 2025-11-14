<script lang="ts">
  import config from '../config';

  /**
   * @component FolderUnknownIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/folder-unknown)
   * @see {@link https://clicons.dev/icon/folder-unknown} - Icon preview
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
  <path d="M15.9961 14C15.9961 12.6193 17.1159 11.5 18.4973 11.5C19.8786 11.5 20.9984 12.6193 20.9984 14C20.9984 14.8571 20.5668 15.6135 19.9091 16.0639C19.2259 16.5317 18.4985 17.172 18.5 18M18.5 20.5V21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.0244 21H12.0222C7.29769 21 4.93543 21 3.46772 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38116 4.53806C2.65287 4.05227 3.0546 3.65142 3.54148 3.38032C4.22449 3 5.13474 3 6.95525 3C8.12158 3 8.70475 3 9.21524 3.19101C10.3808 3.62712 10.8614 4.68358 11.3874 5.73313L12.0222 7M8.01332 7H16.7827C18.8941 7 19.9498 7 20.7081 7.50559C21.0364 7.72447 21.3183 8.00572 21.5377 8.33329C21.8193 8.75388 21.9444 9.26614 22 10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
