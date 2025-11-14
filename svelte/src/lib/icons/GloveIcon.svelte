<script lang="ts">
  import config from '../config';

  /**
   * @component GloveIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/glove)
   * @see {@link https://clicons.dev/icon/glove} - Icon preview
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
  <path d="M13.7821 21H12.702C10.7655 21 9.79724 21 8.964 20.5777C8.13076 20.1554 7.54981 19.3703 6.38792 17.8L3.91438 14.4571C3.29576 13.621 3.37779 12.4511 4.10684 11.7121C4.99835 10.8085 6.47278 10.9147 7.22926 11.9371L8.75569 14V9.42066C8.75569 9.03006 8.75569 8.83476 8.76466 8.66978C8.93073 5.61591 11.3365 3.17742 14.3493 3.00909C14.5121 3 14.7048 3 15.0901 3C15.5368 3 15.7602 3 15.94 3.01111C19.3039 3.21885 21.8181 6.22724 21.4673 9.62464C21.4485 9.80626 21.4118 10.0296 21.3384 10.4762L20.5657 15.1752C20.1781 17.5327 19.9843 18.7114 19.3157 19.5373C19.0131 19.9111 18.6461 20.2262 18.2326 20.4673C17.319 21 16.14 21 13.7821 21Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19.5 17H12.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
