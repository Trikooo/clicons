<script lang="ts">
  import config from '../config';

  /**
   * @component Navigation6Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/navigation6)
   * @see {@link https://clicons.dev/icon/navigation6} - Icon preview
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
  <path d="M6.73726 10.4584C9.00955 5.81947 10.1457 3.5 12 3.5C13.8543 3.5 14.9904 5.81946 17.2627 10.4584L18.8101 13.6174C20.5552 17.18 21.4277 18.9613 20.7934 19.8178C20.6228 20.0481 20.398 20.238 20.1366 20.3729C19.1643 20.8743 17.3794 19.8641 13.8096 17.8436C13.0178 17.3954 12.6219 17.1713 12.1889 17.1312C12.0633 17.1196 11.9367 17.1196 11.8111 17.1312C11.3781 17.1713 10.9822 17.3954 10.1904 17.8436C6.62059 19.8641 4.83571 20.8743 3.86337 20.3729C3.60196 20.238 3.37719 20.0481 3.20664 19.8178C2.57226 18.9613 3.44481 17.18 5.1899 13.6174L6.73726 10.4584Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
