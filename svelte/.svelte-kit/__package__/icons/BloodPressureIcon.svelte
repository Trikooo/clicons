<script lang="ts">
  import config from '../config';

  /**
   * @component BloodPressureIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/blood-pressure)
   * @see {@link https://clicons.dev/icon/blood-pressure} - Icon preview
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
  <path d="M9 13H9.80031C10.4304 13 10.7454 13 10.9985 13.1493C11.2517 13.2987 11.3926 13.5677 11.6743 14.1056L13.1905 17L15.2857 11L16.8018 13.8944C17.0836 14.4323 17.2245 14.7013 17.4777 14.8507C17.7308 15 18.0458 15 18.6759 15H20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.5 12C19.732 8.4154 16.7237 5.03871 14.5241 2.97222C13.1443 1.67593 11.04 1.67593 9.66019 2.97222C7.11961 5.35907 3.5 9.49387 3.5 13.678C3.5 17.7804 6.75366 22 12.0921 22C15.4851 22 18.0359 20.2955 19.4444 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
