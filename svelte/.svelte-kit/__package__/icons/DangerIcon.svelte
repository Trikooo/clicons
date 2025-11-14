<script lang="ts">
  import config from '../config';

  /**
   * @component DangerIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/danger)
   * @see {@link https://clicons.dev/icon/danger} - Icon preview
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
  <path d="M10.5 11.25C10.5 10.2835 9.7165 9.5 8.75 9.5C7.7835 9.5 7 10.2835 7 11.25C7 12.2165 7.7835 13 8.75 13C9.7165 13 10.5 12.2165 10.5 11.25Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M17 11.25C17 10.2835 16.2165 9.5 15.25 9.5C14.2835 9.5 13.5 10.2835 13.5 11.25C13.5 12.2165 14.2835 13 15.25 13C16.2165 13 17 12.2165 17 11.25Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M11 16L11.2929 15.6306C11.6262 15.2102 11.7929 15 12 15C12.2071 15 12.3738 15.2102 12.7071 15.6306L13 16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V18.9929C6.15625 19.6422 6.46621 20.2619 7.02648 20.5901C10.2351 22.47 13.7649 22.47 16.9735 20.5901C17.5338 20.2619 17.8438 19.6422 17.8438 18.9929V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14 21.5V20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 21.5V20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
