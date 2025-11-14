<script lang="ts">
  import config from '../config';

  /**
   * @component MobileProtectionIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mobile-protection)
   * @see {@link https://clicons.dev/icon/mobile-protection} - Icon preview
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
  <path d="M18 13.4974V14.9974C18 18.2972 18 19.9471 16.9749 20.9723C15.9497 21.9974 14.2998 21.9974 11 21.9974C7.70017 21.9974 6.05025 21.9974 5.02513 20.9723C4 19.9471 4 18.2972 4 14.9974V8.99738C4 5.69755 4 4.04763 5.02513 3.02251C5.88151 2.16613 7.17392 2.02516 9.5 2.00195" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M20 5.50195V3.00195C18 3.00195 16.5 2.00195 16.5 2.00195C16.5 2.00195 15 3.00195 13 3.00195V5.50195C13 9.00195 16.5 10.002 16.5 10.002C16.5 10.002 20 9.00195 20 5.50195Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 18.998H12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
