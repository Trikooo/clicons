<script lang="ts">
  import config from '../config';

  /**
   * @component FrisbeeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/frisbee)
   * @see {@link https://clicons.dev/icon/frisbee} - Icon preview
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
  <path d="M4 22L7 19" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2 20L5 17" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19.7161 2.44925C21.0334 3.76659 19.3553 7.58059 15.9679 10.968C12.5805 14.3555 8.76656 16.0337 7.44924 14.7163M19.7161 2.44925C18.3988 1.1319 14.5848 2.81006 11.1974 6.19752M19.7161 2.44925L21.4198 4.15275C22.9253 5.65829 21.3998 9.62485 18.0124 13.0123C14.625 16.3998 10.6585 17.9254 9.15297 16.4198L7.44924 14.7163M7.44924 14.7163C6.13192 13.399 7.81005 9.58498 11.1974 6.19752M11.1974 6.19752C8.93918 8.45582 7.71872 10.897 8.47148 11.6498C9.22423 12.4025 11.6651 11.1821 13.9234 8.92375C16.1817 6.66545 17.4021 4.22449 16.6494 3.47172C15.8966 2.71895 13.4557 3.93921 11.1974 6.19752Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
