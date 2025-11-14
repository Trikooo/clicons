<script lang="ts">
  import config from '../config';

  /**
   * @component DeliveryReturnIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/delivery-return)
   * @see {@link https://clicons.dev/icon/delivery-return} - Icon preview
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
  <path d="M2.49933 7.50009V13.5001C2.49933 17.2713 2.49933 19.1569 3.6709 20.3285C4.84247 21.5001 6.72809 21.5001 10.4993 21.5001H13.9993M21.4993 14.0001V7.50009" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3.86842 5.3147L2.49933 7.50009H21.4993L20.2471 5.41312C19.3935 3.9903 18.9666 3.27889 18.2789 2.88949C17.5911 2.50009 16.7615 2.50009 15.1022 2.50009H8.95304C7.32931 2.50009 6.51744 2.50009 5.83946 2.87539C5.16148 3.25069 4.73046 3.9387 3.86842 5.3147Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11.9993 7.50009V2.50009" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.9993 14.5001C15.9993 14.5001 13.4993 16.3413 13.4993 17.0001C13.4993 17.6589 15.9993 19.5001 15.9993 19.5001M13.9993 17.0001H19.2493C20.492 17.0001 21.4993 18.0075 21.4993 19.2501C21.4993 20.4927 20.492 21.5001 19.2493 21.5001H18.4993" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.99933 10.5001H13.9993" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
