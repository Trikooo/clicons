<script lang="ts">
  import config from '../config';

  /**
   * @component SolarPanel2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/solar-panel2)
   * @see {@link https://clicons.dev/icon/solar-panel2} - Icon preview
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
  <path d="M16.29 2.5H8.01734C6.87343 2.5 6.30148 2.5 5.8759 2.79342C5.45032 3.08683 5.28212 3.59713 4.94571 4.61774L2.6384 11.6177C2.05288 13.3941 1.76012 14.2823 2.24184 14.8912C2.72356 15.5 3.71905 15.5 5.71004 15.5H13.9827C15.1266 15.5 15.6985 15.5 16.1241 15.2066C16.5497 14.9132 16.7179 14.4029 17.0543 13.3823L19.3616 6.38226C19.9471 4.60588 20.2399 3.71769 19.7582 3.10885C19.2764 2.5 18.2809 2.5 16.29 2.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 6.00005L18.9577 15.2129C18.5142 16.5561 18.2924 17.2277 17.7312 17.6139C17.1701 18 16.416 18 14.9077 18H3.99998" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.50003 7H19M17.5 11H3.00003" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11 18.5V21.5M11 21.5H13M11 21.5H9.00003" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.5 2.5H10.5L6.50003 15.5H11.5L15.5 2.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
