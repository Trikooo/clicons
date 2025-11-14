<script lang="ts">
  import config from '../config';

  /**
   * @component NineSquareIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/nine-square)
   * @see {@link https://clicons.dev/icon/nine-square} - Icon preview
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
  <path d="M2.99707 12C2.99707 7.52166 2.99707 5.28249 4.38831 3.89124C5.77956 2.5 8.01873 2.5 12.4971 2.5C16.9754 2.5 19.2146 2.5 20.6058 3.89124C21.9971 5.28249 21.9971 7.52166 21.9971 12C21.9971 16.4783 21.9971 18.7175 20.6058 20.1088C19.2146 21.5 16.9754 21.5 12.4971 21.5C8.01873 21.5 5.77956 21.5 4.38831 20.1088C2.99707 18.7175 2.99707 16.4783 2.99707 12Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11.4971 12H13.4971C14.6016 12 15.4971 11.1046 15.4971 10V9C15.4971 7.89543 14.6016 7 13.4971 7H11.4971C10.3925 7 9.49707 7.89543 9.49707 9V10C9.49707 11.1046 10.3925 12 11.4971 12Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.4971 9.5V15C15.4971 16.1046 14.6016 17 13.4971 17H11.4971C10.3925 17 9.49707 16.1046 9.49707 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
