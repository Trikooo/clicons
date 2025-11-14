<script lang="ts">
  import config from '../config';

  /**
   * @component CoPresentIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/co-present)
   * @see {@link https://clicons.dev/icon/co-present} - Icon preview
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
  <path d="M3.58984 18.177C3.44055 18.0742 3.30166 17.9585 3.17157 17.8284C2 16.6569 2 14.7712 2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11C22 14.7712 22 16.6569 20.8284 17.8284C20.6983 17.9585 20.5595 18.0742 20.4102 18.177" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M8.6863 16.926C7.82171 17.4525 5.55483 18.5276 6.93552 19.8729C7.60997 20.53 8.36113 21 9.30553 21H14.6945C15.6389 21 16.39 20.53 17.0645 19.8729C18.4452 18.5276 16.1783 17.4525 15.3137 16.926C13.2863 15.6913 10.7137 15.6913 8.6863 16.926Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
