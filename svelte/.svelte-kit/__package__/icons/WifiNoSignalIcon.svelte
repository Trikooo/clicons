<script lang="ts">
  import config from '../config';

  /**
   * @component WifiNoSignalIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/wifi-no-signal)
   * @see {@link https://clicons.dev/icon/wifi-no-signal} - Icon preview
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
  <path d="M20.5126 10.8011L15.1758 17.6752C13.7137 19.5584 12.9827 20.5 12 20.5C11.0173 20.5 10.2863 19.5584 8.82421 17.6752L3.48742 10.8011C2.40801 9.41078 1.86831 8.71561 2.02741 7.82234C2.18651 6.92907 2.81754 6.53743 4.07962 5.75415C6.38289 4.32467 9.0958 3.5 12 3.5C14.9042 3.5 17.6171 4.32467 19.9204 5.75415C21.1825 6.53743 21.8135 6.92907 21.9726 7.82234C22.1317 8.71561 21.592 9.41078 20.5126 10.8011Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
