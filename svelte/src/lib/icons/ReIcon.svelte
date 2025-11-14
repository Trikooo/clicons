<script lang="ts">
  import config from '../config';

  /**
   * @component ReIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/re)
   * @see {@link https://clicons.dev/icon/re} - Icon preview
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
  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M18.4924 14H18.5014M18.4922 17.5H18.5012" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M7 14.5C7 14.5 8.5 12.5 10 14M7 14.5V18M7 14.5V13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 15.5V14.75C12 13.7835 12.7835 13 13.75 13C14.7165 13 15.5 13.7835 15.5 14.75V15.5H12ZM12 15.5V16.25C12 17.2165 12.7835 18 13.75 18C14.2397 18 14.6824 17.7989 15 17.4747" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
