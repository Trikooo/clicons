<script lang="ts">
  import config from '../config';

  /**
   * @component Rocket2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/rocket2)
   * @see {@link https://clicons.dev/icon/rocket2} - Icon preview
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
  <path d="M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 15V20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M14 15V17" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
