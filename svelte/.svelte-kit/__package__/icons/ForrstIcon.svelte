<script lang="ts">
  import config from '../config';

  /**
   * @component ForrstIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/forrst)
   * @see {@link https://clicons.dev/icon/forrst} - Icon preview
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
  <path d="M19.8592 14.2648L16.1025 7.73262C14.288 4.57754 13.3807 3 12 3C10.6193 3 9.71204 4.57754 7.89754 7.73262L4.14082 14.2648C2.41522 17.2653 1.55242 18.7656 2.23293 19.8828C2.91344 21 4.69006 21 8.24328 21H8.5C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V13.5C10.5 12.9298 10.5023 12.3309 11.1173 12.0761C11.3011 12 11.5341 12 12 12C12.4659 12 12.6989 12 12.8827 12.0761C13.4977 12.3309 13.5 12.9298 13.5 13.5V19C13.5 19.9428 13.5 20.4142 13.7929 20.7071C14.0858 21 14.5572 21 15.5 21H15.7567C19.3099 21 21.0866 21 21.7671 19.8828C22.4476 18.7656 21.5848 17.2653 19.8592 14.2648Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13.5 19L16.5 16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13.5 15L15 13.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10.5 17L8 14.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
