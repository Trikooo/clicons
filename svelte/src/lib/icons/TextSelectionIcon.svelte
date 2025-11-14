<script lang="ts">
  import config from '../config';

  /**
   * @component TextSelectionIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/text-selection)
   * @see {@link https://clicons.dev/icon/text-selection} - Icon preview
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
  <path d="M2.99792 3.02212C5.19555 2.97 6.26962 2.90514 6.99792 4.51533M6.99792 4.51533C7.55517 3.2634 8.38712 2.90727 10.9979 3.02212M6.99792 4.51533V18.9497M6.99792 18.9497C7.22891 20.6878 8.13357 21.1034 10.9979 20.9406M6.99792 18.9497C6.6944 20.7313 5.77226 21.1738 2.99792 20.9406M3.99792 11.9814H9.99792" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.9698 15.9631V20.4428M20.9698 15.9631C21.017 15.1437 21.0187 14.5196 20.92 14.0101C20.6874 12.8091 19.4287 12.0854 18.2108 11.9382C17.0451 11.7973 16.1094 12.0965 15.1629 13.4715M20.9698 15.9631L18.1305 15.9631C17.6943 15.9631 17.2543 15.9841 16.834 16.1006C14.2653 16.8125 14.4536 20.404 17.0299 20.8467C17.316 20.8959 17.6082 20.9169 17.8979 20.904C18.5745 20.8739 19.1988 20.5481 19.7345 20.135C20.3621 19.6511 20.9698 18.9757 20.9698 17.9541V15.9631Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
