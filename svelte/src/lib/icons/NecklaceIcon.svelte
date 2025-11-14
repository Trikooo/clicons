<script lang="ts">
  import config from '../config';

  /**
   * @component NecklaceIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/necklace)
   * @see {@link https://clicons.dev/icon/necklace} - Icon preview
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
  <path d="M10.542 12.0002L10.9325 8.87621C11.0235 8.14822 11.3545 8.00024 12.042 8.00024C12.7295 8.00024 13.0605 8.14822 13.1515 8.87621L13.542 12.0002" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M8.2844 12.6118C9.6196 11.8003 10.785 12.1273 11.485 12.6482C11.7721 12.8618 11.9156 12.9685 12 12.9685C12.0845 12.9685 12.228 12.8618 12.5151 12.6482C13.2151 12.1273 14.3805 11.8003 15.7157 12.6118C17.468 13.6767 17.8645 17.1898 13.8226 20.1538C13.0527 20.7183 12.6678 21.0005 12 21.0005C11.3323 21.0005 10.9474 20.7183 10.1775 20.1538C6.13558 17.1898 6.53208 13.6767 8.2844 12.6118Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M2.0059 3.00024C1.90863 4.57792 2.97686 8.0433 8.05347 9.66205M21.9941 3.00024C22.0914 4.57792 21.0231 8.0433 15.9465 9.66205" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
