<script lang="ts">
  import config from '../config';

  /**
   * @component BiomassEnergyIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/biomass-energy)
   * @see {@link https://clicons.dev/icon/biomass-energy} - Icon preview
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
  <path d="M20 14.4986C20 18.6415 16.4183 22 12 22C7.58172 22 4 18.6415 4 14.4986L4 14.2794C4 13.5451 4 13.178 4.25365 13.0433C4.80339 12.7515 6 14 6 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4 9.50139C4 5.35849 7.58172 2 12 2C16.4183 2 20 5.35849 20 9.50139V9.72063C20 10.4549 20 10.822 19.7463 10.9567C19.1966 11.2485 18 10 18 10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11.9796 11.1605C11.2601 12.5841 10.7346 14.8928 11.5622 17.5M11.1431 15.0283C6.89727 12.0079 9.81401 8.53376 12.5599 6.78017C12.8913 6.56855 13.057 6.46274 13.2499 6.5119C13.4428 6.56106 13.5355 6.73406 13.7209 7.08005C15.2623 9.95702 16.3667 14.4893 11.1431 15.0283Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
