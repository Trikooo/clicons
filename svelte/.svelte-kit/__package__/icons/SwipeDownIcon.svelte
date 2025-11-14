<script lang="ts">
  import config from '../config';

  /**
   * @component SwipeDownIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/swipe-down)
   * @see {@link https://clicons.dev/icon/swipe-down} - Icon preview
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
  <path d="M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
