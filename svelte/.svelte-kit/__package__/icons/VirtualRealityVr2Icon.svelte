<script lang="ts">
  import config from '../config';

  /**
   * @component VirtualRealityVr2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/virtual-reality-vr2)
   * @see {@link https://clicons.dev/icon/virtual-reality-vr2} - Icon preview
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
  <path d="M13 3H11C6.75736 3 4.63604 3 3.31802 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.31802 19.682C4.63604 21 6.75736 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M11 10L9.24536 13.9123C8.92013 14.6374 8.75751 15 8.5 15C8.24249 15 8.07987 14.6374 7.75464 13.9123L6 10M14 15V13M14 13V11C14 10.5286 14 10.2929 14.1464 10.1464C14.2929 10 14.5286 10 15 10H16.5C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13M14 13H16.5M16.5 13L17.5 15" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
