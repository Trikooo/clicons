<script lang="ts">
  import config from '../config';

  /**
   * @component RobotIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/robot)
   * @see {@link https://clicons.dev/icon/robot} - Icon preview
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
  <path d="M12 4V2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M19 22C19 18.134 15.866 15 12 15C8.13401 15 5 18.134 5 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.5 7.5H9.50998M14.49 7.5H14.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M5.5 6.66667C5.5 6.04669 5.5 5.73669 5.56815 5.48236C5.75308 4.79218 6.29218 4.25308 6.98236 4.06815C7.23669 4 7.54669 4 8.16667 4H15.8333C16.4533 4 16.7633 4 17.0176 4.06815C17.7078 4.25308 18.2469 4.79218 18.4319 5.48236C18.5 5.73669 18.5 6.04669 18.5 6.66667C18.5 7.90663 18.5 8.52661 18.3637 9.03528C17.9938 10.4156 16.9156 11.4938 15.5353 11.8637C15.0266 12 14.4066 12 13.1667 12H10.8333C9.59337 12 8.97339 12 8.46472 11.8637C7.08436 11.4938 6.00617 10.4156 5.6363 9.03528C5.5 8.52661 5.5 7.90663 5.5 6.66667Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
