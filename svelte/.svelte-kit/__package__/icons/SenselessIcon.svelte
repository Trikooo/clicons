<script lang="ts">
  import config from '../config';

  /**
   * @component SenselessIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/senseless)
   * @see {@link https://clicons.dev/icon/senseless} - Icon preview
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
  <path d="M8.00265 9.01879C8.00265 9.01879 8.25256 8.39617 7.62377 8.09123C6.5035 7.54795 5.03652 9.56203 6.86627 10.6732C8.75834 11.8222 10 9.69656 10 8.09123" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.9974 9.98121C15.9974 9.98121 15.7474 10.6038 16.3762 10.9088C17.4965 11.452 18.9635 9.43797 17.1337 8.32683C15.2417 7.17784 14 9.30344 14 10.9088" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16 16.6L15.7307 16.4C15.0125 15.8667 14.1672 15.8667 13.4491 16.4L13.1798 16.6C12.4616 17.1333 11.6163 17.1333 10.8982 16.6L10.6288 16.4C9.91069 15.8667 9.06539 15.8667 8.34723 16.4L8 16.6579" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
