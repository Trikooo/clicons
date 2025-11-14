<script lang="ts">
  import config from '../config';

  /**
   * @component BubbleChatBlockedIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/bubble-chat-blocked)
   * @see {@link https://clicons.dev/icon/bubble-chat-blocked} - Icon preview
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
  <path d="M2 2L22 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.58569 3.58569C8.90461 2.89234 10.4065 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 13.5935 21.1077 15.0954 20.4143 16.4143M5.28249 5.28249C3.56332 7.00165 2.5 9.37665 2.5 12C2.5 13.0483 2.6698 14.057 2.98341 15C3.5282 16.6382 3.12865 18.5818 2.6935 19.6074C2.59266 19.8451 2.62741 20.1274 2.80997 20.31C2.93024 20.4302 3.09774 20.4913 3.26592 20.4658C4.37462 20.2979 5.63177 19.362 7.5 20.3687C8.8394 21.0904 10.3719 21.5 12 21.5C14.6234 21.5 16.9984 20.4367 18.7175 18.7175" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
