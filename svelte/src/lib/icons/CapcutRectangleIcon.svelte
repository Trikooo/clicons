<script lang="ts">
  import config from '../config';

  /**
   * @component CapcutRectangleIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/capcut-rectangle)
   * @see {@link https://clicons.dev/icon/capcut-rectangle} - Icon preview
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
  <path d="M10.8 11.9999L6 14.4999C6 15.6784 6 15.7676 6.35155 16.1338C6.7031 16.4999 7.2689 16.4999 8.40052 16.4999H13.2016C14.3332 16.4999 14.899 16.4999 15.2505 16.1338C15.6021 15.7676 15.6021 15.6784 15.6021 14.4999M10.8 11.9999L18 8.24988M10.8 11.9999L6 9.49988C6 8.32137 6 8.23211 6.35155 7.86599C6.7031 7.49988 7.2689 7.49988 8.40052 7.49988H13.2016C14.3332 7.49988 14.899 7.49988 15.2505 7.86599C15.6021 8.23211 15.6021 8.32137 15.6021 9.49988M10.8 11.9999L18 15.7499" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2.4978 11.9999C2.4978 7.52154 2.4978 5.28236 3.88905 3.89112C5.28029 2.49988 7.51946 2.49988 11.9978 2.49988C16.4761 2.49988 18.7153 2.49988 20.1066 3.89112C21.4978 5.28236 21.4978 7.52154 21.4978 11.9999C21.4978 16.4782 21.4978 18.7174 20.1066 20.1086C18.7153 21.4999 16.4761 21.4999 11.9978 21.4999C7.51946 21.4999 5.28029 21.4999 3.88905 20.1086C2.4978 18.7174 2.4978 16.4782 2.4978 11.9999Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
