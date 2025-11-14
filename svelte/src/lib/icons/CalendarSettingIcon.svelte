<script lang="ts">
  import config from '../config';

  /**
   * @component CalendarSettingIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/calendar-setting)
   * @see {@link https://clicons.dev/icon/calendar-setting} - Icon preview
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
  <path d="M16 2V6M8 2V6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 12.5V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3 10H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17.5 20.5C18.4293 20.5 19.2402 19.993 19.671 19.2404M17.5 20.5C16.5707 20.5 15.7598 19.993 15.329 19.2404M17.5 20.5L17.5 22M17.5 15.5C18.4292 15.5 19.24 16.0069 19.6709 16.7593M17.5 15.5C16.5708 15.5 15.76 16.0069 15.3291 16.7593M17.5 15.5L17.5 14M21 15.9998L19.6709 16.7593M14 19.9998L15.329 19.2404M21 19.9998L19.671 19.2404M14 15.9998L15.3291 16.7593M19.6709 16.7593C19.8803 17.1249 20 17.5485 20 18C20 18.4514 19.8804 18.8749 19.671 19.2404M15.329 19.2404C15.1196 18.8749 15 18.4514 15 18C15 17.5485 15.1197 17.1249 15.3291 16.7593" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
