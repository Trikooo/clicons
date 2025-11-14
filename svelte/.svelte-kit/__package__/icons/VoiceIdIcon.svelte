<script lang="ts">
  import config from '../config';

  /**
   * @component VoiceIdIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/voice-id)
   * @see {@link https://clicons.dev/icon/voice-id} - Icon preview
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
  <path d="M2.50003 8.18677C2.60409 6.08705 2.9154 4.77792 3.84667 3.84664C4.77795 2.91537 6.08708 2.60406 8.1868 2.5M21.5 8.18677C21.396 6.08705 21.0847 4.77792 20.1534 3.84664C19.2221 2.91537 17.913 2.60406 15.8133 2.5M15.8133 21.5C17.913 21.3959 19.2221 21.0846 20.1534 20.1534C21.0847 19.2221 21.396 17.9129 21.5 15.8132M8.18679 21.5C6.08708 21.3959 4.77795 21.0846 3.84667 20.1534C2.9154 19.2221 2.60409 17.9129 2.50003 15.8132" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 7V17M8.00006 9V15M16.0001 15V9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
