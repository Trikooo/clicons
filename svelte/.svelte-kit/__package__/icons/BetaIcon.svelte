<script lang="ts">
  import config from '../config';

  /**
   * @component BetaIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/beta)
   * @see {@link https://clicons.dev/icon/beta} - Icon preview
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
  <path d="M12.8831 10.2C15.1353 10.2 16.961 8.58822 16.961 6.6C16.961 4.61177 15.1353 3 12.8831 3C10.6309 3 8.80516 4.61177 8.80516 6.6V19.2C8.80516 20.1941 7.89228 21 6.76619 21C6.01148 21 5.35255 20.638 5 20.1M8.80516 14.7C8.80516 17.1853 11.0874 19.2 13.9026 19.2C16.7178 19.2 19 17.1853 19 14.7C19 12.2147 16.7178 10.0866 13.9026 10.0866" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
