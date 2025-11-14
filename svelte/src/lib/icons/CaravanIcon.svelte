<script lang="ts">
  import config from '../config';

  /**
   * @component CaravanIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/caravan)
   * @see {@link https://clicons.dev/icon/caravan} - Icon preview
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
  <path d="M19.1 18H20.5C20.9659 18 21.1989 18 21.3827 17.9239C21.6277 17.8224 21.8224 17.6277 21.9239 17.3827C22 17.1989 22 16.9659 22 16.5M19.1 18V11.3955C19.1 9.32395 18.7412 8.25904 17.3783 6.71082C15.5455 4.62893 14.3713 4 11.5699 4H6.22222C4.23185 4 3.23666 4 2.61833 4.68342C2 5.36683 2 6.46678 2 8.66667V13.3333C2 15.5332 2 16.6332 2.61833 17.3166C3.23666 18 4.23185 18 6.22222 18H7M19.1 18H11" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <circle cx="9" cy="18" r="2" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M5 9.5C5 8.32149 5 7.73223 5.34171 7.36612C5.68342 7 6.23339 7 7.33333 7H9.66667C10.7666 7 11.3166 7 11.6583 7.36612C12 7.73223 12 8.32149 12 9.5C12 10.6785 12 11.2678 11.6583 11.6339C11.3166 12 10.7666 12 9.66667 12H7.33333C6.23339 12 5.68342 12 5.34171 11.6339C5 11.2678 5 10.6785 5 9.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
