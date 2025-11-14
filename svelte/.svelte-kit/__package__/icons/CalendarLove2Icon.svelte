<script lang="ts">
  import config from '../config';

  /**
   * @component CalendarLove2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/calendar-love2)
   * @see {@link https://clicons.dev/icon/calendar-love2} - Icon preview
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
  <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3 10H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 19C12 19 15.5 17.4118 15.5 14.8333C15.5 13.8208 14.7632 13 13.75 13C12.9211 13 12.3684 13.3529 12 14.0588C11.6316 13.3529 11.0789 13 10.25 13C9.23684 13 8.5 13.8208 8.5 14.8333C8.5 17.4118 12 19 12 19Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
