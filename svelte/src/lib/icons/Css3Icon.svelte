<script lang="ts">
  import config from '../config';

  /**
   * @component Css3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/css3)
   * @see {@link https://clicons.dev/icon/css3} - Icon preview
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
  <path d="M19.75 2.50024H4.75C4.19772 2.50024 3.75 2.94796 3.75 3.50024L5.60753 17.8961C5.69611 18.5826 6.13335 19.1745 6.76348 19.4609L10.7598 21.2774C11.0829 21.4243 11.4336 21.5002 11.7884 21.5002C12.0935 21.5002 12.396 21.4441 12.6808 21.3346L17.637 19.4283C18.3227 19.1646 18.8086 18.5462 18.9026 17.8176L20.75 3.50024C20.75 2.94796 20.3023 2.50024 19.75 2.50024Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.5 6.5H16.5L8 11H16L15.5 16L12 17L8.5 16L8.3 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
