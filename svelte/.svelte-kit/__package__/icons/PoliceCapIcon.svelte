<script lang="ts">
  import config from '../config';

  /**
   * @component PoliceCapIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/police-cap)
   * @see {@link https://clicons.dev/icon/police-cap} - Icon preview
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
  <path d="M2.0799 9.73404C1.52911 12.578 4.00638 14 4.00638 14H19.995C19.995 14 22.4709 12.578 21.9201 9.73404C21.5732 7.94296 17.7287 5.58788 14.9296 4.08959C13.5726 3.3632 12.894 3 12 3C11.1059 3 10.4274 3.3632 9.07038 4.08959C6.2713 5.58788 2.42678 7.94296 2.0799 9.73404Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.14163 14C2.66809 15.3249 2.21055 18.5761 5.30556 19.3837C7.36279 19.9204 9.64289 20.487 10.9407 20.8065C11.4645 20.9355 11.7264 21 12 21C12.2736 21 12.5355 20.9355 13.0593 20.8065C14.3571 20.487 16.6372 19.9204 18.6944 19.3837C21.7894 18.5761 21.3319 15.3249 19.8584 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10.3899 7.72984L11.4959 7.1281C11.8098 6.9573 12.1902 6.9573 12.5041 7.1281L13.6101 7.72984C13.9002 7.88767 14.0631 8.21 13.977 8.52648C13.7595 9.3254 13.2247 10.5958 12 11C10.7753 10.5958 10.2405 9.3254 10.023 8.52648C9.93688 8.21 10.0998 7.88767 10.3899 7.72984Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
