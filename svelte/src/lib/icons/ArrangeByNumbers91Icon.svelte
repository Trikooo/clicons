<script lang="ts">
  import config from '../config';

  /**
   * @component ArrangeByNumbers91Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/arrange-by-numbers91)
   * @see {@link https://clicons.dev/icon/arrange-by-numbers91} - Icon preview
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
  <path d="M6.99988 21.0003V14.9491C6.99988 14.3746 6.99988 14.0873 6.76947 14.0158C6.26294 13.8587 5.49988 15 5.49988 15M6.99988 21.0003H5.49988M6.99988 21.0003H8.49988" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.99988 6.50098V4.75098C8.99988 3.92602 8.99988 3.51354 8.70698 3.25726C8.41409 3.00098 7.94269 3.00098 6.99988 3.00098C6.05707 3.00098 5.58566 3.00098 5.29277 3.25726C4.99988 3.51354 4.99988 3.92602 4.99988 4.75098C4.99988 5.57593 4.99988 5.98841 5.29277 6.2447C5.58566 6.50098 6.05707 6.50098 6.99988 6.50098H8.99988ZM8.99988 6.50098V7.37598C8.99988 8.61341 8.99988 9.23213 8.56054 9.61655C8.1212 10.001 7.41409 10.001 5.99988 10.001H4.99988" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.4999 20V4M16.4999 20C15.7997 20 14.4915 18.0057 13.9999 17.5M16.4999 20C17.2002 20 18.5084 18.0057 18.9999 17.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
