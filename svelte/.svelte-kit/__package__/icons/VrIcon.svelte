<script lang="ts">
  import config from '../config';

  /**
   * @component VrIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/vr)
   * @see {@link https://clicons.dev/icon/vr} - Icon preview
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
  <path d="M7 3H17C18.8692 3 19.8038 3 20.5 3.40192C20.9561 3.66523 21.3348 4.04394 21.5981 4.5C22 5.19615 22 6.13077 22 8C22 9.86923 22 10.8038 21.5981 11.5C21.3348 11.9561 20.9561 12.3348 20.5 12.5981C19.8038 13 18.8692 13 17 13H16.6063C15.9194 13 15.5759 13 15.2546 12.9286C14.8244 12.8331 14.4206 12.6439 14.0718 12.3746C13.8112 12.1734 13.5913 11.9096 13.1516 11.3819C12.8012 10.9614 12.626 10.7512 12.4249 10.6568C12.1557 10.5305 11.8443 10.5305 11.5751 10.6568C11.374 10.7512 11.1988 10.9614 10.8484 11.3819C10.4087 11.9096 10.1888 12.1734 9.92823 12.3746C9.57943 12.6439 9.17559 12.8331 8.74542 12.9286C8.42406 13 8.08061 13 7.39369 13H7C5.13077 13 4.19615 13 3.5 12.5981C3.04394 12.3348 2.66523 11.9561 2.40192 11.5C2 10.8038 2 9.86923 2 8C2 6.13077 2 5.19615 2.40192 4.5C2.66523 4.04394 3.04394 3.66523 3.5 3.40192C4.19615 3 5.13077 3 7 3Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5 6H7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12.1006 19L10.0803 17M12.1006 19L10.0803 21M12.1006 19C7.05072 19 2.8089 17 2 15M15.1311 18.7711C18.6024 18.2314 21.2663 16.7892 22 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
