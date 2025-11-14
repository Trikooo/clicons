<script lang="ts">
  import config from '../config';

  /**
   * @component Pan3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pan3)
   * @see {@link https://clicons.dev/icon/pan3} - Icon preview
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
  <path d="M12 20L12 18.5M16 20V18.5M20 20V18.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 20L22 20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.5556 11H10.4444C10.199 11 10 11.2487 10 11.5556C10 14.0102 11.5919 16 13.5556 16H18.4444C20.4081 16 22 14.0102 22 11.5556C22 11.2487 21.801 11 21.5556 11Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M13 8C14.652 6.97775 12.348 5.02225 14 4M16 8C17.652 6.97775 15.348 5.02225 17 4M19 8C20.652 6.97775 18.348 5.02225 20 4" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M10 11L8 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3.36797 4.36797C3.85859 3.87734 4.65404 3.87734 5.14466 4.36797L7.63203 6.85534C8.12266 7.34596 8.12266 8.14141 7.63203 8.63203C7.14141 9.12266 6.34596 9.12266 5.85534 8.63203L3.36797 6.14466C2.87734 5.65404 2.87734 4.85859 3.36797 4.36797Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
