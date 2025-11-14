<script lang="ts">
  import config from '../config';

  /**
   * @component WirelessCloudAccessIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/wireless-cloud-access)
   * @see {@link https://clicons.dev/icon/wireless-cloud-access} - Icon preview
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
  <path d="M17.4776 8.39801L17.5 8.39795C19.9853 8.39795 22 10.3784 22 12.8214C22 14.3551 21.206 15.7065 20 16.5M17.4776 8.39801C17.4924 8.23611 17.5 8.07215 17.5 7.90646C17.5 4.92055 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.67106 6.52042 7.43728M17.4776 8.39801C17.3753 9.51316 16.9286 10.5307 16.2428 11.3469M6.52042 7.43728C3.98398 7.67454 2 9.77448 2 12.3299C2 14.0886 2.93963 15.6315 4.35232 16.5M6.52042 7.43728C6.67826 7.42251 6.83823 7.41496 7 7.41496C8.12582 7.41496 9.16474 7.78072 10.0005 8.39795" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 15.9778C9.14883 15.0431 10.5209 14.5 11.9946 14.5C13.4729 14.5 14.849 15.0466 16 15.9866M14.1743 18.5C13.5182 18.0909 12.7779 17.8607 11.9946 17.8607C11.2152 17.8607 10.4784 18.0886 9.82477 18.4938" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 21.5H12.0064" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
