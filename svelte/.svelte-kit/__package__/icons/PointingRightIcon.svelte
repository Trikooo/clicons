<script lang="ts">
  import config from '../config';

  /**
   * @component PointingRightIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pointing-right)
   * @see {@link https://clicons.dev/icon/pointing-right} - Icon preview
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
  <path d="M22.0022 4.5H16.0059M22.0022 4.5C22.0022 3.79977 20.0091 2.49153 19.5037 2M22.0022 4.5C22.0022 5.20023 20.0091 6.50847 19.5037 7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M1.99767 10.8264L2.94576 10.8264C3.59087 10.8264 4.21881 10.6175 4.73653 10.2308L9.63637 6.57074C10.2015 6.14861 10.9026 5.81146 11.5499 6.09015C12.5976 6.5413 13.2783 7.81411 11.7074 9.37203L9.99906 10.9703L20.4157 10.9703C22.4576 11.0266 22.5589 14.3169 20.4157 14.4576L14.4794 14.4576C14.6704 15.9386 13.6276 22.9153 9.21009 21.8984C9.00021 21.8501 8.78723 21.8019 8.57708 21.7548C7.65888 21.549 6.02245 20.9407 5.06576 20.27C4.06983 19.5717 3.07783 19.8181 1.99767 19.8181" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
