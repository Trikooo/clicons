<script lang="ts">
  import config from '../config';

  /**
   * @component FourFinger3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/four-finger3)
   * @see {@link https://clicons.dev/icon/four-finger3} - Icon preview
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
  <path d="M7.89205 9.35707L5.4741 11.9595C5.15171 12.2914 4.57635 13.1576 4.50692 13.951C4.4339 14.7853 5.18562 15.9822 5.4741 16.4404C6.22604 17.6346 6.52881 18.2973 7.40846 19.4276C7.88617 20.0414 9.17658 21.2649 11.2772 21.4191C12.8453 21.5341 14.4062 21.5234 15.1459 21.4191C15.6538 21.3474 16.8868 21.1203 18.0474 19.9254C19.2081 18.7306 19.4982 16.7723 19.4982 15.9425V7.97657C19.4982 7.4787 19.2081 6.48296 18.0474 6.48296C16.8868 6.48296 16.5967 7.4787 16.5967 7.97657V11.4617M7.89205 13.951V5.98509C7.89205 5.48722 8.1822 4.49148 9.34282 4.49148C10.5034 4.49148 10.7936 5.48722 10.7936 5.98509M10.7936 5.98509V10.4659M10.7936 5.98509V3.99361C10.7936 3.49574 11.0837 2.5 12.2444 2.5C13.405 2.5 13.6951 3.49574 13.6951 3.99361V5.98509M13.6951 5.98509V10.4659M13.6951 5.98509C13.6951 5.48722 13.9853 4.49148 15.1459 4.49148C16.3065 4.49148 16.5967 5.48722 16.5967 5.98509V8.47444" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
