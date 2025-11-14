<script lang="ts">
  import config from '../config';

  /**
   * @component JoinRoundIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/join-round)
   * @see {@link https://clicons.dev/icon/join-round} - Icon preview
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
  <path d="M15.9997 22H17.9997C19.8853 22 20.8281 22 21.4139 21.4142C21.9997 20.8284 21.9997 19.8856 21.9997 18V17C21.9997 15.1144 21.9997 14.1716 21.4139 13.5858C20.8281 13 19.8853 13 17.9997 13L14.9997 13C13.114 13 12.1712 13 11.5855 12.4142C10.9997 11.8284 10.9997 10.8856 10.9997 9V6C10.9997 4.11438 10.9997 3.17157 10.4139 2.58579C9.82809 2 8.88528 2 6.99966 2L5.99966 2C4.11405 2 3.17124 2 2.58545 2.58579C1.99966 3.17157 1.99966 4.11438 1.99966 6L1.99966 8C1.99966 14.5997 1.99967 17.8995 4.04992 19.9497C6.10017 22 9.4 22 15.9997 22Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
