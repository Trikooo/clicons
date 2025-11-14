<script lang="ts">
  import config from '../config';

  /**
   * @component CloudAngledZapIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/cloud-angled-zap)
   * @see {@link https://clicons.dev/icon/cloud-angled-zap} - Icon preview
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
  <path d="M7 17.5C4.23858 17.5 2 15.336 2 12.6667C2 10.1537 3.98398 8.0886 6.52042 7.85528M17.5 17.5C19.9853 17.5 22 15.5524 22 13.15C22 10.7476 19.9853 8.8 17.5 8.8C17.4925 8.8 17.485 8.80002 17.4776 8.80005M17.4776 8.80005C17.4924 8.64084 17.5 8.47961 17.5 8.31667C17.5 5.38035 15.0376 3 12 3C9.12324 3 6.76233 5.135 6.52042 7.85528M17.4776 8.80005C17.3753 9.89668 16.9286 10.8973 16.2428 11.7M6.52042 7.85528C6.67826 7.84076 6.83823 7.83333 7 7.83333C8.12582 7.83333 9.16474 8.19302 10.0005 8.8" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
