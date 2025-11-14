<script lang="ts">
  import config from '../config';

  /**
   * @component LassoToolIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/lasso-tool)
   * @see {@link https://clicons.dev/icon/lasso-tool} - Icon preview
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
  <path d="M17.3003 15.5116C20.3416 12.9804 22.6484 9.95901 21.8354 6.92985C20.7852 3.01732 15.5349 1.02232 10.1083 2.4739C4.68179 3.92547 1.13402 8.27394 2.18415 12.1865C3.03697 15.3638 5.88849 16.9746 10.3503 16.42M17.3003 15.5116C15.9161 11.5244 9.71766 12.8164 10.002 15.5116C10.2129 17.5105 14.9298 17.5105 17.3003 15.5116ZM17.3003 15.5116C18.1269 18.2959 16.2449 21.4457 12.9572 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
