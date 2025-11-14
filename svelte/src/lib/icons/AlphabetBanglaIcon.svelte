<script lang="ts">
  import config from '../config';

  /**
   * @component AlphabetBanglaIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/alphabet-bangla)
   * @see {@link https://clicons.dev/icon/alphabet-bangla} - Icon preview
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
  <path d="M14.7394 12.7799C15.773 12.7495 17.8505 14.1181 17.9964 19.8328M9.93274 10.7651C9.85184 10.0639 9.87585 8.55093 11.2281 7.80584C12.9955 6.83202 14.8132 8.46474 15.0206 10.2727C15.1223 11.1585 14.7652 13.992 13.2559 15.6892C12.6926 16.3227 12.1849 16.8767 11.2281 16.9748C10.3404 17.0659 9.61226 16.8283 8.76843 16.2714C7.41998 15.3814 6.01024 13.881 4.8146 11.8082C3.53743 9.59404 2.84713 8.08034 2.00195 5.02637" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M6.99609 6.36752C7.87394 5.41201 12.9902 1.68945 16.5947 6.13758C17.0314 6.67646 17.2497 6.9459 17.6229 7.99921C17.9961 9.05252 17.9961 9.78494 17.9961 11.2498V20" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17.9961 10C17.9961 7.72717 19.1961 4.62581 21.9961 5.03703" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
