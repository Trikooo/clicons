<script lang="ts">
  import config from '../config';

  /**
   * @component RecycleIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/recycle)
   * @see {@link https://clicons.dev/icon/recycle} - Icon preview
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
  <path d="M17.9999 15.9988C16.4999 16.999 14.6842 18.9772 14 22M15 19.3372C12.6321 14.0106 17.4087 12.2141 21.0443 12.0143C21.4831 11.9902 21.7025 11.9782 21.86 12.1336C22.0176 12.289 22.0085 12.5106 21.9903 12.9536C21.8394 16.638 20.3286 21.707 15 19.3372Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11 20H6.02099C3.73502 20 2.59203 20 2.15185 19.2655C1.71168 18.531 2.2625 17.5428 3.36416 15.5666L4.79185 13.0054C5.53109 11.6793 5.90071 11.0162 6.47924 11.0003C7.05776 10.9844 7.46426 11.6261 8.27725 12.9095L8.97855 14.0166" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 8.03384L8.99165 6.15531C10.4526 3.38777 11.1831 2.004 12.2929 2.00001C13.4027 1.99601 14.1419 3.37449 15.6204 6.13145L15.8647 6.58709C16.7821 8.29766 17.2407 9.15294 16.8728 9.68491C16.5048 10.2169 15.6024 10.0032 13.7975 9.5758L13.715 9.55628" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
