<script lang="ts">
  import config from '../config';

  /**
   * @component CalendarFavorite2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/calendar-favorite2)
   * @see {@link https://clicons.dev/icon/calendar-favorite2} - Icon preview
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
  <path d="M12.5183 13.4333L13.0462 14.4979C13.1182 14.6461 13.3102 14.7882 13.4722 14.8154L14.4291 14.9757C15.041 15.0786 15.185 15.5262 14.744 15.9677L14.0001 16.7178C13.8741 16.8448 13.8051 17.0898 13.8441 17.2652L14.0571 18.1937C14.2251 18.9287 13.8381 19.213 13.1932 18.8289L12.2963 18.2936C12.1343 18.1968 11.8674 18.1968 11.7024 18.2936L10.8055 18.8289C10.1636 19.213 9.77359 18.9257 9.94158 18.1937L10.1546 17.2652C10.1935 17.0898 10.1246 16.8448 9.99857 16.7178L9.25465 15.9677C8.8167 15.5262 8.95768 15.0786 9.56962 14.9757L10.5265 14.8154C10.6855 14.7882 10.8775 14.6461 10.9495 14.4979L11.4774 13.4333C11.7654 12.8556 12.2333 12.8556 12.5183 13.4333Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
