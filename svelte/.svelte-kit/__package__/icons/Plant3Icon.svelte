<script lang="ts">
  import config from '../config';

  /**
   * @component Plant3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/plant3)
   * @see {@link https://clicons.dev/icon/plant3} - Icon preview
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
  <path d="M14.5 11.5C14.5 11.5 12 13.5 12 17" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10.063 9.06301C11.3123 7.8137 11.3123 5.78815 10.063 4.53884C8.17794 2.65376 4.03078 3.03078 4.03078 3.03078C4.03078 3.03078 3.65376 7.17794 5.53884 9.06301C6.78815 10.3123 8.8137 10.3123 10.063 9.06301Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.8031 11.1969C15.874 12.2677 17.6102 12.2677 18.681 11.1969C20.2968 9.58109 19.9736 6.02638 19.9736 6.02638C19.9736 6.02638 16.4189 5.70322 14.8031 7.319C13.7323 8.38985 13.7323 10.126 14.8031 11.1969Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 9.5C10 9.5 12 12 12 16.9993" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 21C18.8012 18.5471 15.5841 17 12 17C8.41592 17 5.19883 18.5471 3 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
