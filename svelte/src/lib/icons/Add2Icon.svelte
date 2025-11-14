<script lang="ts">
  import config from '../config';

  /**
   * @component Add2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/add2)
   * @see {@link https://clicons.dev/icon/add2} - Icon preview
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
  <path d="M12.001 20.0088C12.8289 20.0088 13.5 19.3377 13.5 18.5098V13.5068H18.502C19.3295 13.5068 20.0004 12.8363 20.001 12.0088C20.0015 11.1805 19.3302 10.5088 18.502 10.5088H13.5V5.50684C13.5 4.67933 12.8295 4.00835 12.002 4.00781C11.1737 4.00727 10.502 4.67857 10.502 5.50684V10.5088H5.49902C4.67114 10.5088 4 11.1799 4 12.0078C4 12.8357 4.67114 13.5068 5.49902 13.5068H10.502V18.5098C10.502 19.3377 11.1731 20.0088 12.001 20.0088Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
