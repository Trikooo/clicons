<script lang="ts">
  import config from '../config';

  /**
   * @component TrapezoidLineVerticalIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/trapezoid-line-vertical)
   * @see {@link https://clicons.dev/icon/trapezoid-line-vertical} - Icon preview
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
  <path d="M12 5C14.6653 5 15.998 5 16.9449 5.62726C17.0483 5.69576 17.1471 5.76916 17.2409 5.84711C18.1001 6.56098 18.2886 7.69057 18.6655 9.94975L19.0328 12.1515C19.5645 15.338 19.8303 16.9312 18.7825 17.9656C17.7348 19 15.8551 19 12.0957 19H11.9043C8.14492 19 6.26523 19 5.21745 17.9656C4.16967 16.9312 4.4355 15.338 4.96716 12.1515L5.33451 9.94974C5.71144 7.69057 5.89991 6.56098 6.75905 5.84711C6.85287 5.76915 6.95171 5.69576 7.05511 5.62726C8.00198 5 9.33465 5 12 5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 22L12 2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
