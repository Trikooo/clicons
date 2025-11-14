<script lang="ts">
  import config from '../config';

  /**
   * @component Tap8Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/tap8)
   * @see {@link https://clicons.dev/icon/tap8} - Icon preview
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
  <path d="M7.78057 13.9568V9.49317M7.78057 9.49317V3.97805C7.78057 3.15846 8.46365 2.49792 9.28334 2.49792C10.103 2.49792 10.7489 3.15846 10.7489 3.97805V7.974M7.78057 9.49317C6.46629 10.684 5.05198 12.1884 4.86153 12.5737C3.97535 13.9225 4.06824 14.5755 5.05582 16.2259C5.89463 17.6277 7.02271 19.1833 7.08856 19.2579C7.7588 20.0174 7.62553 20.0175 8.59699 20.7307C9.46447 21.3327 11.2638 21.7522 15.4822 21.3327C18.9186 20.8019 19.7419 17.8026 19.7241 16.3692V12.8295C19.9381 9.88749 18.7083 9.75469 16.4751 9.46512M10.7489 7.974V10.4976M10.7489 7.974C11.3062 7.06532 13.3302 7.43254 13.7247 9.14847M13.7603 10.4936V9.49317C13.7603 9.4143 13.7564 9.33519 13.7453 9.25717M13.7247 9.14847C13.7263 9.15569 13.728 9.16293 13.7296 9.1702C13.7359 9.19899 13.7411 9.228 13.7453 9.25717M13.7247 9.14847C13.7288 9.18343 13.7356 9.21967 13.7453 9.25717M13.7247 9.14847C13.5846 7.95246 16.6156 8.24402 16.7389 10.3474V11.4905" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
