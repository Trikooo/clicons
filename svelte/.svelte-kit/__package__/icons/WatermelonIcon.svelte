<script lang="ts">
  import config from '../config';

  /**
   * @component WatermelonIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/watermelon)
   * @see {@link https://clicons.dev/icon/watermelon} - Icon preview
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
  <path d="M15.8868 4.07654C17.1488 5.55202 17.9211 7.53337 17.9211 9.71174C17.9211 14.272 14.5364 17.9688 10.3612 17.9688C8.04167 17.9688 6.03867 16.9089 4.67822 15.2242" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M16.4175 3.57276L13.3562 6.41533C13.2666 6.49855 13.2726 6.64182 13.3537 6.73342C14.0308 7.49886 14.048 9.14294 13.2715 10.1706C12.4455 11.2636 11.2161 11.1153 10.774 10.8878L10.5235 11.5915C10.4287 11.8578 10.1611 12.0219 9.88068 11.9858L8.23877 11.7744C8.11395 11.7583 7.98884 11.8018 7.90094 11.8918L4.97952 14.8835L3.58065 16.3786C2.72253 17.2958 2.8051 18.7534 3.9034 19.3631C7.37659 21.2913 12.9566 22.3318 17.8425 17.7359C22.3576 13.0699 21.2088 7.40772 19.431 3.95709C18.844 2.81784 17.3568 2.70057 16.4175 3.57276Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
