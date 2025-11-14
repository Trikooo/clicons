<script lang="ts">
  import config from '../config';

  /**
   * @component ComputerProtectionIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/computer-protection)
   * @see {@link https://clicons.dev/icon/computer-protection} - Icon preview
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
  <path d="M22 13C21.9221 14.8723 21.671 16.0203 20.8614 16.8284C19.6878 18 17.7989 18 14.021 18H10.014C6.23617 18 4.34725 18 3.17362 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17362 3.17157C4.34725 2 6.23617 2 10.014 2H11" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 18V22" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M8 22H16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M11 15H13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 5.5V3C20 3 18.5 2 18.5 2C18.5 2 17 3 15 3V5.5C15 9 18.5 10 18.5 10C18.5 10 22 9 22 5.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
