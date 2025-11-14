<script lang="ts">
  import config from '../config';

  /**
   * @component FingerPrintCheckIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/finger-print-check)
   * @see {@link https://clicons.dev/icon/finger-print-check} - Icon preview
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
  <path d="M5.92683 20.5968C3.85533 19.1894 2.5 16.8511 2.5 14.2044V9.75383C2.5 8.56968 2.7713 7.44725 3.25666 6.4423M9.35367 21.914C10.255 22.0396 11.145 22.007 11.9952 21.8397M17.7224 6.4159C15.6293 2.12426 9.8958 0.664733 5.92683 3.36135M18.4919 10.3293V11.4954M10.4959 5.99807C12.7039 5.99807 14.4939 7.87756 14.4939 10.196M6.88271 8.39691C6.63601 8.9422 6.49797 9.55219 6.49797 10.196V13.7943C6.49797 16.1128 8.28793 17.9923 10.4959 17.9923C10.6652 17.9923 10.832 17.9813 10.9957 17.9598M10.4959 10.4959V13.4945" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.1702 18.447C16.4706 18.5912 16.8432 18.9639 17.0235 19.2643C17.0836 19.685 17.3841 18.0624 18.8505 17.1008M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
