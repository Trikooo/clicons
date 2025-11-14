<script lang="ts">
  import config from '../config';

  /**
   * @component ThreeFinger2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/three-finger2)
   * @see {@link https://clicons.dev/icon/three-finger2} - Icon preview
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
  <path d="M7.75971 13.4795L7.74145 5.02886C7.73965 4.1996 8.41205 3.52639 9.2421 3.52639C10.0709 3.52639 10.7428 4.19762 10.7428 5.02563M10.7428 5.02563V10.0056M10.7428 5.02563L10.7428 3.49728C10.7428 2.66928 11.4146 1.99805 12.2434 1.99805C13.0735 1.99805 13.7459 2.67125 13.7441 3.50051L13.7441 11.0103M16.7454 11.9977V10.1448M16.7454 10.1448V5.48285C16.7472 4.65359 16.0748 3.98039 15.2448 3.98039C14.416 3.98039 13.7441 4.65162 13.7441 5.47962M16.7454 10.1448C17.552 10.024 19.5243 10.1448 19.7475 12.0023V15.684C19.7475 17.0435 19.5178 18.1434 18.1285 19.7409C17.6131 20.4161 17.6846 21.0947 17.6846 22.002M7.75002 8.9992C7.11294 9.55515 5.50173 11.0778 4.59852 12.4555C3.34405 14.369 5.82174 16.8627 6.84695 18.2521C8.36321 20.0648 8.26197 20.0142 8.26197 21.9951" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
