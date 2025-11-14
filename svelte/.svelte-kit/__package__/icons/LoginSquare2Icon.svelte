<script lang="ts">
  import config from '../config';

  /**
   * @component LoginSquare2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/login-square2)
   * @see {@link https://clicons.dev/icon/login-square2} - Icon preview
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
  <path d="M19.9999 6.99976C19.923 5.58248 19.7124 4.66416 19.1363 3.96219C18.9701 3.75965 18.7844 3.57394 18.5819 3.40772C17.4755 2.49976 15.8318 2.49976 12.5443 2.49976L11.9999 2.49992C8.22871 2.49992 6.34309 2.49992 5.17152 3.67149C3.99994 4.84307 3.99994 6.72868 3.99994 10.4999V13.4999C3.99994 17.2712 3.99994 19.1568 5.17152 20.3283C6.34309 21.4999 8.22871 21.4999 11.9999 21.4999L12.5443 21.4998C15.8318 21.4998 17.4755 21.4998 18.5819 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3354 19.923 18.417 19.9999 16.9998" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M13 7.99992C13 7.99992 9.00001 10.9459 9 12C8.99999 13.054 13 15.9999 13 15.9999M9.5 12H20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
