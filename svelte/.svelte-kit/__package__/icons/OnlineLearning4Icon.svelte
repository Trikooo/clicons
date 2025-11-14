<script lang="ts">
  import config from '../config';

  /**
   * @component OnlineLearning4Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/online-learning4)
   * @see {@link https://clicons.dev/icon/online-learning4} - Icon preview
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
  <path d="M8.5 19H8.51" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M6 6C4.90328 6.05476 4.2191 6.21819 3.73223 6.7059C3 7.43939 3 8.61994 3 10.981V16.9914C3 19.3525 3 20.533 3.73223 21.2665C4.46447 22 5.64298 22 8 22H9C11.357 22 12.5355 22 13.2678 21.2665C14 20.533 14 19.3525 14 16.9914V15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15 4V11.5M9.77631 2.08242C13.178 1.58922 15 3.47059 15 3.47059C15 3.47059 16.822 1.58922 20.2237 2.08242C20.6819 2.14885 21 2.55824 21 3.02124V9.49465C21 10.1407 20.3935 10.6121 19.7499 10.5572C16.6531 10.293 15 12 15 12C15 12 13.3469 10.293 10.2501 10.5572C9.60646 10.6121 9 10.1407 9 9.49465V3.02124C9 2.55824 9.3181 2.14885 9.77631 2.08242Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
