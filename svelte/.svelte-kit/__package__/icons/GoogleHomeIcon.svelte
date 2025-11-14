<script lang="ts">
  import config from '../config';

  /**
   * @component GoogleHomeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/google-home)
   * @see {@link https://clicons.dev/icon/google-home} - Icon preview
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
  <path d="M22 11.2703C22 16.6439 17.5228 21 12 21C6.47715 21 2 16.6439 2 11.2703C2 8.76656 2.97195 6.48373 4.56875 4.75948C5.01425 4.27842 5.237 4.03789 5.88434 3.71276C6.53168 3.38764 6.98784 3.33859 7.90016 3.24048C9.0225 3.11979 10.5114 3 12 3C13.4886 3 14.9775 3.11979 16.0998 3.24048C17.0122 3.33859 17.4683 3.38764 18.1157 3.71276C18.763 4.03789 18.9857 4.27842 19.4313 4.75948C21.0281 6.48373 22 8.76656 22 11.2703Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 4C18 5.10457 15.3137 6 12 6C8.68629 6 6 5.10457 6 4" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
