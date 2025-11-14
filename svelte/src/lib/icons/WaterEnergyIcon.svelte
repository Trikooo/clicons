<script lang="ts">
  import config from '../config';

  /**
   * @component WaterEnergyIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/water-energy)
   * @see {@link https://clicons.dev/icon/water-energy} - Icon preview
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
  <path d="M17.2532 19.9167C19.8129 18.2147 21.5 15.3044 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C11.2744 2.5 10.5678 2.58134 9.88889 2.73541M17.2532 19.9167V17M17.2532 19.9167H20.5M6.72222 4.09975C4.17625 5.80396 2.5 8.70623 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C12.7256 21.5 13.4322 21.4187 14.1111 21.2646M6.72222 4.09975V7M6.72222 4.09975H3.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10 12 7 12 7C12 7 8.5 10 8.5 12.5C8.5 14.433 10.067 16 12 16Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
