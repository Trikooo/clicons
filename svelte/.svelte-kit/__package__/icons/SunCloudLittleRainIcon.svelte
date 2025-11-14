<script lang="ts">
  import config from '../config';

  /**
   * @component SunCloudLittleRainIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/sun-cloud-little-rain)
   * @see {@link https://clicons.dev/icon/sun-cloud-little-rain} - Icon preview
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
  <path d="M17.4776 9.04499C17.485 9.04496 17.4925 9.04494 17.5 9.04494C19.9853 9.04494 22 11.0747 22 13.5786C22 15.3587 20.9817 16.7581 19.5 17.5M17.4776 9.04499C17.4924 8.87906 17.5 8.71102 17.5 8.54119C17.5 5.48088 15.0376 3 12 3C9.12324 3 6.76233 5.22516 6.52042 8.06032M17.4776 9.04499C17.3753 10.1879 16.9286 11.2308 16.2428 12.0674M6.52042 8.06032C3.98398 8.3035 2 10.4558 2 13.0749C2 14.9843 3.05449 16.6457 4.60877 17.5M6.52042 8.06032C6.67826 8.04519 6.83823 8.03745 7 8.03745C8.12582 8.03745 9.16474 8.41232 10.0005 9.04494" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12.0011 14.5V16M9 17.5V19M15 17.5V19M6.5 20.5V22M17.5 20.5V22M12 20.5V22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
