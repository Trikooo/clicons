<script lang="ts">
  import config from '../config';

  /**
   * @component SofaSingleIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/sofa-single)
   * @see {@link https://clicons.dev/icon/sofa-single} - Icon preview
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
  <path d="M8 18L7 22M16 18L17 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 9C16.2969 9 16 11 16 11C15.7633 11.9468 15.6596 14.1441 14.8346 14.7882C14.5634 15 14.1884 15 13.4384 15H10.5616C9.8116 15 9.43663 15 9.16536 14.7882C8.34039 14.1441 8.23669 11.9468 8 11C8 11 7.70312 9 6 9C4.89543 9 4 9.89543 4 11C4 11.7403 4.4022 12.3866 5 12.7324L5.38226 14.746C5.67777 16.3026 5.82552 17.0809 6.38051 17.5405C6.93549 18 7.72769 18 9.31208 18H14.6879C16.2723 18 17.0645 18 17.6195 17.5405C18.1745 17.0809 18.3222 16.3026 18.6177 14.746L19 12.7324C19.5978 12.3866 20 11.7403 20 11C20 9.89543 19.1046 9 18 9Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.5 12.5C9.43278 11.8776 10.6581 11.5 12 11.5C13.3419 11.5 14.5672 11.8776 15.5 12.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M7.01633 9L6.83223 7.7071C6.45413 5.0517 6.26508 3.72399 7.01024 2.862C7.7554 2 9.09221 2 11.7658 2H12.2342C14.9078 2 16.2446 2 16.9898 2.862C17.7349 3.72399 17.5459 5.0517 17.1678 7.7071L16.9837 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
