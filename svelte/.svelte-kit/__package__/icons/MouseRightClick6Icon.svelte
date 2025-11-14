<script lang="ts">
  import config from '../config';

  /**
   * @component MouseRightClick6Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mouse-right-click6)
   * @see {@link https://clicons.dev/icon/mouse-right-click6} - Icon preview
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
  <path d="M10.5 5.5V2M10.5 12V9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M18 12L3 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19 3.16746L19.3811 2M19.9713 5.56746L21 6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M9 7C9 6.53406 9 6.30109 9.07612 6.11732C9.17761 5.87229 9.37229 5.67761 9.61732 5.57612C9.80109 5.5 10.0341 5.5 10.5 5.5C10.9659 5.5 11.1989 5.5 11.3827 5.57612C11.6277 5.67761 11.8224 5.87229 11.9239 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 11.9239 8.38268C11.8224 8.62771 11.6277 8.82239 11.3827 8.92388C11.1989 9 10.9659 9 10.5 9C10.0341 9 9.80109 9 9.61732 8.92388C9.37229 8.82239 9.17761 8.62771 9.07612 8.38268C9 8.19891 9 7.96594 9 7.5V7Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
