<script lang="ts">
  import config from '../config';

  /**
   * @component WheelchairIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/wheelchair)
   * @see {@link https://clicons.dev/icon/wheelchair} - Icon preview
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
  <path d="M12 16C12 18.7614 9.76142 21 7 21C4.23858 21 2 18.7614 2 16C2 13.2386 4.23858 11 7 11C9.76142 11 12 13.2386 12 16Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M7.00801 16L6.99902 16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M6 11L5.3721 5.97683C5.2273 4.81842 5.1549 4.23921 4.85048 3.82169C4.67889 3.58637 4.45799 3.39136 4.2032 3.25029C3.75115 3 3.16743 3 2 3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M6 7H11.5C13.857 7 15.0355 7 15.7678 7.73223C16.5 8.46447 16.5 9.64298 16.5 12V18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 14H16.0241C16.909 14 17.3515 14 17.7374 14.1887C17.8297 14.2339 17.9188 14.2867 18.0039 14.3468C18.3597 14.5978 18.6052 15.0057 19.096 15.8214C19.489 16.4745 19.6855 16.8011 19.9799 16.9279C20.0491 16.9578 20.1212 16.9789 20.1947 16.9911C20.5071 17.0428 20.8239 16.8673 21.4576 16.5163L22 16.2158" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
