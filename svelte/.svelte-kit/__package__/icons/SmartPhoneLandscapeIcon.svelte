<script lang="ts">
  import config from '../config';

  /**
   * @component SmartPhoneLandscapeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/smart-phone-landscape)
   * @see {@link https://clicons.dev/icon/smart-phone-landscape} - Icon preview
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
  <path d="M19 12.0039H19.01" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M2 10.5L2 13.5C2 15.857 2 17.0355 2.73223 17.7678C3.46447 18.5 4.64298 18.5 7 18.5H17C19.357 18.5 20.5355 18.5 21.2678 17.7678C22 17.0355 22 15.857 22 13.5V10.5C22 8.14298 22 6.96447 21.2678 6.23223C20.5355 5.5 19.357 5.5 17 5.5L7 5.5C4.64298 5.5 3.46447 5.5 2.73223 6.23223C2 6.96447 2 8.14298 2 10.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
