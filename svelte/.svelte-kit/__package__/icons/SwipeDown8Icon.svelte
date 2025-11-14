<script lang="ts">
  import config from '../config';

  /**
   * @component SwipeDown8Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/swipe-down8)
   * @see {@link https://clicons.dev/icon/swipe-down8} - Icon preview
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
  <path d="M19.503 7.98715V2M19.503 7.98715C18.8039 7.98715 17.4977 5.99712 17.007 5.4925M19.503 7.98715C20.2021 7.98715 21.5083 5.99712 21.999 5.4925" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5.53651 14.453V9.98787M5.53651 9.98787V4.47087C5.53651 3.651 6.22091 2.99023 7.04219 2.99023C7.86347 2.99023 8.51063 3.651 8.51063 4.47087V8.46818M5.53651 9.98787C4.21967 11.1791 2.80262 12.684 2.6118 13.0695C1.7239 14.4187 1.81696 15.0719 2.80647 16.7229C3.64691 18.1251 4.77717 19.6813 4.84315 19.7559C5.51469 20.5157 5.38117 20.5158 6.35451 21.2292C7.22367 21.8314 9.02652 22.251 13.253 21.8314C16.6962 21.3005 17.5211 18.3001 17.5032 16.8662V13.3253C17.7176 10.3823 16.4854 10.2495 14.2479 9.95981M8.51063 8.46818V10.9926M8.51063 8.46818C9.06899 7.55918 11.0969 7.92653 11.4922 9.64304M11.5279 10.9886V9.98787C11.5279 9.90897 11.5239 9.82983 11.5128 9.75178M11.4922 9.64304C11.4938 9.65026 11.4955 9.65751 11.4971 9.66478C11.5034 9.69358 11.5086 9.72261 11.5128 9.75178M11.4922 9.64304C11.4963 9.67802 11.5031 9.71427 11.5128 9.75178M11.4922 9.64304C11.3518 8.44663 14.3886 8.73828 14.5123 10.8424V11.9859" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
