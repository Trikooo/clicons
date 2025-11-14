<script lang="ts">
  import config from '../config';

  /**
   * @component TacoIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/taco)
   * @see {@link https://clicons.dev/icon/taco} - Icon preview
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
  <path d="M12 9C7.67909 9 3.98995 11.9368 2.53353 16.0723C2.00628 17.5695 1.74265 18.318 2.34852 19.159C2.95439 20 3.94331 20 5.92117 20H18.0788C20.0567 20 21.0456 20 21.6515 19.159C22.2573 18.318 21.9937 17.5695 21.4665 16.0723C20.0101 11.9368 16.3209 9 12 9Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M21.3292 15C22.2972 13.7279 22.2176 11.9699 21.0901 10.7778C20.5725 10.2305 20.2571 9.53455 20.1924 8.80334C20.0438 7.12573 18.626 5.78671 16.8478 5.65884L16.6438 5.64417C15.8567 5.58757 15.1028 5.30226 14.4905 4.83203C13.0458 3.72266 10.9542 3.72266 9.50953 4.83203C8.89717 5.30226 8.14332 5.58757 7.35624 5.64417L7.15218 5.65884C5.37401 5.78671 3.95622 7.12573 3.80765 8.80334C3.74289 9.53455 3.42752 10.2305 2.90986 10.7778C1.78245 11.9699 1.70277 13.7279 2.67083 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M16.0078 14L15.9988 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M13.0078 16L12.9988 16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M18.0078 17L17.9988 17" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
