<script lang="ts">
  import config from '../config';

  /**
   * @component AiChemistryIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/ai-chemistry)
   * @see {@link https://clicons.dev/icon/ai-chemistry} - Icon preview
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
  <path d="M13.5 18C13.5 20.2091 11.7091 22 9.5 22C7.29086 22 5.5 20.2091 5.5 18V2H13.5V10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16 10.5L15.7421 11.197C15.4039 12.111 15.2348 12.568 14.9014 12.9014C14.568 13.2348 14.111 13.4039 13.197 13.7421L12.5 14L13.197 14.2579C14.111 14.5961 14.568 14.7652 14.9014 15.0986C15.2348 15.432 15.4039 15.889 15.7421 16.803L16 17.5L16.2579 16.803C16.5961 15.889 16.7652 15.432 17.0986 15.0986C17.432 14.7652 17.889 14.5961 18.803 14.2579L19.5 14L18.803 13.7421C17.889 13.4039 17.432 13.2348 17.0986 12.9014C16.7652 12.568 16.5961 12.111 16.2579 11.197L16 10.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.5 2H14.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5.5 8H13.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
