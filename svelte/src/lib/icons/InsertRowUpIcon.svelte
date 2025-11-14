<script lang="ts">
  import config from '../config';

  /**
   * @component InsertRowUpIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/insert-row-up)
   * @see {@link https://clicons.dev/icon/insert-row-up} - Icon preview
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
  <path d="M18 2.8125C18.8888 3.01415 19.5638 3.34564 20.1088 3.89059C21.5 5.28184 21.5 7.52101 21.5 11.9994C21.5 16.4777 21.5 18.7169 20.1088 20.1081C18.7175 21.4993 16.4783 21.4993 12 21.4993C7.52166 21.4993 5.28249 21.4993 3.89124 20.1081C2.5 18.7169 2.5 16.4777 2.5 11.9993C2.5 7.52101 2.5 5.28184 3.89124 3.89059C4.4362 3.34564 5.11125 3.01415 6.00001 2.8125" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 5.5L12 2.5L15 5.5M12 3.5V10.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2.5 15H21.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M8.5 21.5L8.5 15M15.5 21.5L15.5 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
