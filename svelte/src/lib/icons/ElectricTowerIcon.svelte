<script lang="ts">
  import config from '../config';

  /**
   * @component ElectricTowerIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/electric-tower)
   * @see {@link https://clicons.dev/icon/electric-tower} - Icon preview
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
  <path d="M9 6L9.39981 8.21413C9.46594 8.64819 9.42564 9.08872 9.2813 9.50982L5 22M15 6L14.6002 8.21413C14.5341 8.64819 14.5744 9.08872 14.7187 9.50982L19 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3 11L3.32375 9.92082C3.41097 9.63011 3.45457 9.48476 3.55302 9.36314C3.65148 9.24153 3.79688 9.1534 4.08769 8.97715L8.47402 6.31877C8.73481 6.16072 8.8652 6.0817 9.01594 6.04085C9.16668 6 9.32791 6 9.65037 6H14.3496C14.6721 6 14.8333 6 14.9841 6.04085C15.1348 6.0817 15.2652 6.16073 15.526 6.31877L19.9123 8.97715C20.2031 9.1534 20.3485 9.24153 20.447 9.36314C20.5454 9.48475 20.589 9.63012 20.6762 9.92082L21 11" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3 22H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4 9H19.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.5 10L16 14.5L5 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.5 10L8 14.5L19 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 6L10.4 3.76C11.1333 2.58667 11.5 2 12 2C12.5 2 12.8667 2.58667 13.6 3.76L15 6" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
