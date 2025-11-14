<script lang="ts">
  import config from '../config';

  /**
   * @component CovidInfoIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/covid-info)
   * @see {@link https://clicons.dev/icon/covid-info} - Icon preview
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
  <circle cx="12" cy="12" r="10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.5269 15.0816C18.5281 12.0136 17.8948 8.61324 16.0422 7.51869C14.5897 6.66047 13.3219 7.00632 12.5603 7.55723C12.248 7.78311 12.0919 7.89605 12 7.89605C11.9081 7.89605 11.752 7.78311 11.4397 7.55723C10.6781 7.00632 9.41034 6.66047 7.95778 7.51869C6.11193 8.60928 5.64895 12.1138 9.61321 15.1813C10.37 15.7669 11.1711 16.2935 12 16.7713C13.7788 17.7965 16.4168 19 19 19M5 19C6.54872 19 8.11718 18.5674 9.50835 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
