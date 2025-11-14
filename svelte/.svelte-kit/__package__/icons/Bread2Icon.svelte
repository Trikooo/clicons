<script lang="ts">
  import config from '../config';

  /**
   * @component Bread2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/bread2)
   * @see {@link https://clicons.dev/icon/bread2} - Icon preview
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
  <path d="M12 14C12 17 9.76142 17 7 17C4.23858 17 2 17 2 14C2 11 4.23858 7 7 7C9.76142 7 12 11 12 14Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M7 7H17C19.7614 7 22 11 22 14C22 17 19.7614 17 17 17H7" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M5.86019 17C7.4363 17 9 16.1 9 14C9 11.9 8.14239 10 6.6451 10C5.14782 10 4.31835 13.97 5.7172 14.5C7.03693 15 7.04538 13 7.04538 13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
