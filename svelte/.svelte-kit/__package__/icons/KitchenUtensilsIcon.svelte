<script lang="ts">
  import config from '../config';

  /**
   * @component KitchenUtensilsIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/kitchen-utensils)
   * @see {@link https://clicons.dev/icon/kitchen-utensils} - Icon preview
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
  <path d="M12.4831 14.0001V3.00006M12.4831 14.0001C10.8247 14.0001 9.48038 15.4355 9.48038 16.6251C9.48038 18.3751 10.8247 21.0001 12.4831 21.0001C14.1414 21.0001 15.4857 18.3751 15.4857 16.6251C15.4857 15.4355 14.1414 14.0001 12.4831 14.0001Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M5.47841 10.0283L5.47841 21M4.18615 3.12945L3.40347 3.20753C2.83225 3.26452 2.42596 3.78885 2.51382 4.35564L3.1828 8.67118C3.29612 9.40225 3.926 10.0106 4.66644 10.0106H6.2904C7.03083 10.0106 7.66071 9.40225 7.77404 8.67118L8.44301 4.35564C8.53087 3.78885 8.12458 3.26452 7.55336 3.20753L6.77337 3.12962C5.91311 3.04368 5.04642 3.04363 4.18615 3.12945Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M18.496 13.8182L18.496 3.02594C19.6545 3.34592 21.5815 4.55268 21.9006 7.52842L22.4737 12.0424C22.5743 12.8351 22.3727 13.6261 21.5846 13.7616C20.9244 13.8751 19.9229 13.9122 18.496 13.8182ZM18.496 13.8182L18.496 21.0001" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
