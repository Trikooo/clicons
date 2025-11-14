<script lang="ts">
  import config from '../config';

  /**
   * @component MouseRightClickIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mouse-right-click)
   * @see {@link https://clicons.dev/icon/mouse-right-click} - Icon preview
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
  <path d="M10.5 2L10.5 6M10.5 10L10.5 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3.24061 17.0888C3.43047 19.4803 5.32417 21.511 7.76502 21.8118C8.6626 21.9223 9.57517 22 10.5 22C11.4247 22 12.3373 21.9223 13.2349 21.8118C15.6758 21.511 17.5694 19.4803 17.7593 17.0888C17.8909 15.4317 18 13.732 18 12C18 10.268 17.8909 8.56832 17.7593 6.91118C17.5694 4.51965 15.6758 2.48893 13.2349 2.1882C12.3373 2.07762 11.4247 2 10.5 2C9.57517 2 8.6626 2.07762 7.76502 2.1882C5.32417 2.48893 3.43047 4.51965 3.24061 6.91118C3.10903 8.56832 3 10.268 3 12C3 13.732 3.10903 15.4317 3.24061 17.0888Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M19 2C20.0547 3.13158 20.7646 4.50113 21 6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 7.5C12 7.03406 12 6.80109 11.9239 6.61732C11.8224 6.37229 11.6277 6.17761 11.3827 6.07612C11.1989 6 10.9659 6 10.5 6C10.0341 6 9.80109 6 9.61732 6.07612C9.37229 6.17761 9.17761 6.37229 9.07612 6.61732C9 6.80109 9 7.03406 9 7.5V8.5C9 8.96594 9 9.19891 9.07612 9.38268C9.17761 9.62771 9.37229 9.82239 9.61732 9.92388C9.80109 10 10.0341 10 10.5 10C10.9659 10 11.1989 10 11.3827 9.92388C11.6277 9.82239 11.8224 9.62771 11.9239 9.38268C12 9.19891 12 8.96594 12 8.5V7.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
