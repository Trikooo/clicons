<script lang="ts">
  import config from '../config';

  /**
   * @component PenConnectBluetoothIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pen-connect-bluetooth)
   * @see {@link https://clicons.dev/icon/pen-connect-bluetooth} - Icon preview
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
  <path d="M5.35588 7.05145L8.12475 8.96165C8.7073 9.36354 8.99857 9.56449 8.99999 9.83111C9.00142 10.0977 8.7123 10.3009 8.13407 10.7072L7.55758 11.1123C6.6051 11.7815 6.12886 12.1162 5.74237 11.9635C5.35588 11.8109 5.35588 11.2882 5.35588 10.2427V7.05145ZM5.35588 7.05145L5.2813 7M5.35588 7.05145V6.94855M5.2813 7L2 4.73627M5.2813 7L5.35588 6.94855M5.2813 7L2 9.26373M5.35588 6.94855L8.12475 5.03835C8.7073 4.63646 8.99857 4.43551 8.99999 4.16889C9.00142 3.90227 8.7123 3.69912 8.13407 3.29281L7.55758 2.88774C6.6051 2.21847 6.12886 1.88383 5.74237 2.03647C5.35588 2.18911 5.35588 2.71182 5.35588 3.75726V6.94855Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
