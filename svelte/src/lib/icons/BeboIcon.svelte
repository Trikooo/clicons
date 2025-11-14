<script lang="ts">
  import config from '../config';

  /**
   * @component BeboIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/bebo)
   * @see {@link https://clicons.dev/icon/bebo} - Icon preview
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
  <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.9 14.6758 10.5691 12.5661 10.1461C11.713 9.97507 11 9.29474 11 8.42476C11 7.11978 12.0676 6.03085 13.3523 6.26034C17.4783 6.99743 20 9.75593 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4V14C8 16.2091 9.79086 18 12 18Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
