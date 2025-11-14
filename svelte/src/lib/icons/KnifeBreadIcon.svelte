<script lang="ts">
  import config from '../config';

  /**
   * @component KnifeBreadIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/knife-bread)
   * @see {@link https://clicons.dev/icon/knife-bread} - Icon preview
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
  <path d="M10.9408 15.8962C11.3869 16.3785 11.8594 17.1338 12.5909 17.0175C12.943 16.9615 13.2331 16.6478 13.8134 16.0204L15.4749 14.2239L15.8549 12.1693L17.7551 11.7583L18.1352 9.70371L20.0354 9.29279L20.6175 7.23529L21.6541 6.96268C22.1189 6.84042 22.3514 6.77929 22.4549 6.56164C22.5585 6.34398 22.4735 6.13125 22.3035 5.70579C22.0445 5.05764 21.6283 4.2661 21.0425 3.8879C19.5355 2.70403 17.4949 2.70403 15.9879 3.8879C15.7142 4.10296 15.4317 4.40836 14.8668 5.01917L2.99976 17.8504C2.33341 18.5709 2.33341 19.7391 2.99976 20.4596C3.75522 21.2764 5.01122 21.1502 5.61452 20.1968L8.15899 16.1758C8.53248 15.5856 8.94586 14.7353 9.74298 14.8926C10.0729 14.9578 10.3622 15.2706 10.9408 15.8962Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
