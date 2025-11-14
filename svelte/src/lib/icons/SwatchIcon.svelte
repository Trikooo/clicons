<script lang="ts">
  import config from '../config';

  /**
   * @component SwatchIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/swatch)
   * @see {@link https://clicons.dev/icon/swatch} - Icon preview
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
  <path d="M16.5551 4C17.0179 4.42885 17.5421 4.96506 18.1713 5.60862C20.0571 7.53758 21 8.50206 21 9.70056C21 10.8991 20.0571 11.8635 18.1713 13.7925L11.7706 20.3396C11.5289 20.5868 11.2709 20.8069 11 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M2 16.6153C2 19.5892 4.48731 22 7.55556 22H16.4444C19.0634 22 20.3728 22 21.1864 21.2114C22 20.4229 22 19.1537 22 16.6153C22 16.0078 22 15.4729 21.9888 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M2 7.55556C2 4.93664 2 3.62718 2.80546 2.81359C3.61091 2 4.90728 2 7.5 2C10.0927 2 11.3891 2 12.1945 2.81359C13 3.62718 13 4.93664 13 7.55556V16.4444C13 19.5127 10.5376 22 7.5 22C4.46243 22 2 19.5127 2 16.4444V7.55556Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M7.5 17.5H7.50898" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M2 8H13M2 13H13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
