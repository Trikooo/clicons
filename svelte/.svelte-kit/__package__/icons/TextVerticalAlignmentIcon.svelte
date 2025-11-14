<script lang="ts">
  import config from '../config';

  /**
   * @component TextVerticalAlignmentIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/text-vertical-alignment)
   * @see {@link https://clicons.dev/icon/text-vertical-alignment} - Icon preview
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
  <path d="M13 4L22 4" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13 8L22 8" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2 12H22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13 20L22 20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13 16L22 16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 8.5L6.71429 5.5M6.71429 5.5L5.58623 2.86786C5.55491 2.7948 5.53926 2.75827 5.51945 2.72724C5.44354 2.60832 5.31395 2.527 5.16623 2.50559C5.12769 2.5 5.08512 2.5 5 2.5C4.91488 2.5 4.87231 2.5 4.83377 2.50559C4.68605 2.527 4.55646 2.60831 4.48055 2.72724C4.46074 2.75826 4.44509 2.7948 4.41377 2.86786L3.28571 5.5M6.71429 5.5L3.28571 5.5M3.28571 5.5L2 8.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 21.5L6.71429 18.5M6.71429 18.5L5.58623 15.8679C5.55491 15.7948 5.53926 15.7583 5.51945 15.7272C5.44354 15.6083 5.31395 15.527 5.16623 15.5056C5.12769 15.5 5.08512 15.5 5 15.5C4.91488 15.5 4.87231 15.5 4.83377 15.5056C4.68605 15.527 4.55646 15.6083 4.48055 15.7272C4.46074 15.7583 4.44509 15.7948 4.41377 15.8679L3.28571 18.5M6.71429 18.5L3.28571 18.5M3.28571 18.5L2 21.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
