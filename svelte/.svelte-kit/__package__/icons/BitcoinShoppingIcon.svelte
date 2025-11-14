<script lang="ts">
  import config from '../config';

  /**
   * @component BitcoinShoppingIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/bitcoin-shopping)
   * @see {@link https://clicons.dev/icon/bitcoin-shopping} - Icon preview
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
  <path d="M4.30064 17.1912L3.16042 10.2591C2.98802 9.21103 2.90182 8.68698 3.17785 8.34349C3.45388 8 3.96121 8 4.97587 8H19.0241C20.0388 8 20.5461 8 20.8221 8.34349C21.0982 8.68698 21.012 9.21103 20.8396 10.2591L19.6994 17.1912C19.3214 19.4888 19.1325 20.6376 18.361 21.3188C17.5894 22 16.4773 22 14.253 22H9.74699C7.5227 22 6.41055 22 5.63904 21.3188C4.86752 20.6376 4.67856 19.4888 4.30064 17.1912Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17 8C17 4.68629 15.5 2 12 2C8.5 2 7 4.68629 7 8" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
