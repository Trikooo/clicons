<script lang="ts">
  import config from '../config';

  /**
   * @component CursorProgress3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/cursor-progress3)
   * @see {@link https://clicons.dev/icon/cursor-progress3} - Icon preview
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
  <path d="M8.5469 3.94865L13.9101 6.04728L13.9101 6.04728C17.0034 7.25771 18.55 7.86293 18.4988 8.82296C18.4475 9.78299 16.8334 10.2232 13.6051 11.1036C12.6439 11.3658 12.1633 11.4969 11.8301 11.8301C11.4969 12.1633 11.3658 12.6439 11.1036 13.6051C10.2232 16.8334 9.78299 18.4475 8.82296 18.4988C7.86293 18.55 7.25771 17.0034 6.04728 13.9101L6.04728 13.9101L3.94865 8.5469C2.68138 5.30831 2.04774 3.68901 2.86837 2.86837C3.68901 2.04774 5.30831 2.68138 8.5469 3.94865Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18.2585 13.531C18.0919 13.5106 17.9222 13.5001 17.75 13.5001C17.5778 13.5001 17.4081 13.5106 17.2415 13.531M18.2585 21.4691C18.0919 21.4895 17.9222 21.5001 17.75 21.5001C17.5778 21.5001 17.4081 21.4895 17.2415 21.4691M21.5 15.9492C21.4347 15.7972 21.3591 15.6474 21.273 15.5007C21.1869 15.3541 21.0928 15.2148 20.9915 15.0832M14.5085 19.9183C14.4072 19.7866 14.3131 19.6474 14.227 19.5007C14.1409 19.3541 14.0653 19.2043 14 19.0523M14.5085 15.0829C14.4072 15.2146 14.3131 15.3538 14.227 15.5005C14.1409 15.6471 14.0653 15.7969 14 15.949M21.5 19.052C21.4347 19.2041 21.3591 19.3538 21.273 19.5005C21.1869 19.6471 21.0928 19.7864 20.9915 19.918" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
