<script lang="ts">
  import config from '../config';

  /**
   * @component EcoPowerIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/eco-power)
   * @see {@link https://clicons.dev/icon/eco-power} - Icon preview
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
  <path d="M9 20C5.22895 19.1318 3 15.6772 3 12.5102C3 8.74448 6.37016 5.02317 8.73565 2.875C10.0204 1.70833 11.9797 1.70833 13.2643 2.875C14.7712 4.24338 16.5749 6.25009 17.7511 8.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M17 15.5C15.5 16.5 13 18.5 11 22M13 19C10.3362 13.1407 15.8347 11.2355 19.9249 11.0158C20.4185 10.9893 20.6653 10.976 20.8425 11.147C21.0198 11.3179 21.0095 11.5616 20.9891 12.049C20.8194 16.1017 18.9947 21.6068 13 19Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
