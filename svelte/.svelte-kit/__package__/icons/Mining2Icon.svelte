<script lang="ts">
  import config from '../config';

  /**
   * @component Mining2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mining2)
   * @see {@link https://clicons.dev/icon/mining2} - Icon preview
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
  <path d="M14.8814 5.18592C13.459 4.31437 9.8081 2.64142 6.51949 3.06842C8.50877 4.43842 9.55528 5.17528 12.3785 7.68884M18.8139 9.11839C19.6855 10.5408 21.3585 14.1917 20.9315 17.4803C19.5614 15.491 18.8246 14.4445 16.311 11.6213M10.4727 11.4182L3.4233 18.4675C2.85149 19.0393 2.86008 19.975 3.44248 20.5574C4.02489 21.1398 4.96056 21.1484 5.53237 20.5766L12.5818 13.5272M11.9865 9.22552L14.7742 12.0132C15.0838 12.3228 15.5845 12.3239 15.8927 12.0158L19.3464 8.56208C19.6546 8.25393 19.6534 7.75319 19.3439 7.44364L16.5561 4.65592C16.2466 4.34637 15.7458 4.34523 15.4377 4.65338L11.9839 8.10708C11.6758 8.41523 11.6769 8.91597 11.9865 9.22552Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
