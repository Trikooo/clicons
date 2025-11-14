<script lang="ts">
  import config from '../config';

  /**
   * @component StairsIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/stairs)
   * @see {@link https://clicons.dev/icon/stairs} - Icon preview
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
  <path d="M17.5 3.5H18.5C19.4428 3.5 19.9142 3.5 20.2071 3.79289C20.5 4.08579 20.5 4.55719 20.5 5.5V16.5C20.5 18.3856 20.5 19.3284 19.9142 19.9142C19.3284 20.5 18.3856 20.5 16.5 20.5H5.5C4.55719 20.5 4.08579 20.5 3.79289 20.2071C3.5 19.9142 3.5 19.4428 3.5 18.5V17.5C3.5 16.5572 3.5 16.0858 3.79289 15.7929C4.08579 15.5 4.55719 15.5 5.5 15.5H7.5V13.5C7.5 12.5572 7.5 12.0858 7.79289 11.7929C8.08579 11.5 8.55719 11.5 9.5 11.5H11.5V9.5C11.5 8.55719 11.5 8.08579 11.7929 7.79289C12.0858 7.5 12.5572 7.5 13.5 7.5H15.5V5.5C15.5 4.55719 15.5 4.08579 15.7929 3.79289C16.0858 3.5 16.5572 3.5 17.5 3.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
