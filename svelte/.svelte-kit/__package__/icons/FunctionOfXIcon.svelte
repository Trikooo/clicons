<script lang="ts">
  import config from '../config';

  /**
   * @component FunctionOfXIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/function-of-x)
   * @see {@link https://clicons.dev/icon/function-of-x} - Icon preview
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
  <path d="M2 18.2222C2.18866 19.0724 2.56908 20 3.56235 20C5.28118 20 5.71088 18.2222 7 12C8.28912 5.77778 8.71882 4 10.4376 4C11.4309 4 11.8113 4.92763 12 5.77778M4.91667 9.77778H10.4376" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 12C22.3804 15.253 22.2854 16.9808 21 20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 12C10.6196 15.253 10.7146 16.9808 12 20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.2891 13.9992C15.093 13.9692 15.5515 14.064 15.8227 14.5459C16.1515 15.216 16.9785 17.0679 17.1835 17.472C17.3073 17.6489 17.4715 17.904 17.9995 17.9875L18.7099 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M19.0025 14C17.8793 14 17.0873 15.288 16.5593 15.936C15.7913 16.944 14.927 18.05 13.9961 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
