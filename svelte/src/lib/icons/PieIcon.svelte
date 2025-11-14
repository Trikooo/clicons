<script lang="ts">
  import config from '../config';

  /**
   * @component PieIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pie)
   * @see {@link https://clicons.dev/icon/pie} - Icon preview
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
  <path d="M20.7578 10.1693C21.5 10.1693 22 11.1878 22 12.027C22 14.3396 18.5658 14.7345 18 12.5287C17.4968 14.4904 14.5032 14.4904 14 12.5287C13.4968 14.4904 10.5032 14.4904 10 12.5287C9.49677 14.4904 6.50323 14.4904 6 12.5287C5.43417 14.7345 2 14.3396 2 12.027C2 11.1878 2.5 10.1693 3.24224 10.1693C4.18202 6.63181 7.74641 4 12 4C16.2536 4 19.818 6.63181 20.7578 10.1693Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15 7.5L15.5 8.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 7.5L8.5 8.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 7V8" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3.5 14L3.94872 15.0769C4.94302 17.4632 5.44017 18.6564 6.44787 19.3282C7.45556 20 8.74815 20 11.3333 20H12.6667C15.2518 20 16.5444 20 17.5521 19.3282C18.5598 18.6564 19.057 17.4632 20.0513 15.0769L20.5 14" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
