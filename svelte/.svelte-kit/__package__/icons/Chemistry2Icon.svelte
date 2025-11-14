<script lang="ts">
  import config from '../config';

  /**
   * @component Chemistry2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/chemistry2)
   * @see {@link https://clicons.dev/icon/chemistry2} - Icon preview
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
  <path d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M3 9L11 9M20 9H16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M15.2466 4V6.55767C15.2466 7.69966 15.2466 8.27065 15.3937 8.8188C15.5408 9.36696 15.8292 9.87028 16.4059 10.8769L17.1873 12.241C18.6568 14.8062 19.3916 16.0888 18.7888 17.0396L18.7795 17.0541C18.1679 18 16.6119 18 13.5 18C10.3881 18 8.83212 18 8.22055 17.0541L8.21123 17.0396C7.60843 16.0888 8.34319 14.8062 9.8127 12.241L10.5941 10.8769C11.1708 9.87028 11.4592 9.36696 11.6063 8.8188C11.7534 8.27065 11.7534 7.69966 11.7534 6.55767V4" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M10.5 4L16.5 4" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
