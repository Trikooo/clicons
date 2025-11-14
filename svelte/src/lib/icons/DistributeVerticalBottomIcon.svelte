<script lang="ts">
  import config from '../config';

  /**
   * @component DistributeVerticalBottomIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/distribute-vertical-bottom)
   * @see {@link https://clicons.dev/icon/distribute-vertical-bottom} - Icon preview
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
  <path d="M1.99988 22L21.9999 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M1.99994 10L21.9999 10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.00232 4.5C8.00232 5.34389 7.91895 6.31789 8.75232 6.79904C9.10039 7 9.5677 7 10.5023 7H13.5023C14.4369 7 14.9042 7 15.2523 6.79904C16.0857 6.31789 16.0023 5.34389 16.0023 4.5C16.0023 3.65611 16.0857 2.68211 15.2523 2.20096C14.9042 2 14.4369 2 13.5023 2L10.5023 2C9.5677 2 9.10039 2 8.75232 2.20096C7.91895 2.68211 8.00232 3.65611 8.00232 4.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5.00232 16.5C5.00232 17.3439 4.91895 18.3179 5.75232 18.799C6.10039 19 6.5677 19 7.50232 19L16.5023 19C17.4369 19 17.9042 19 18.2523 18.799C19.0857 18.3179 19.0023 17.3439 19.0023 16.5C19.0023 15.6561 19.0857 14.6821 18.2523 14.201C17.9042 14 17.4369 14 16.5023 14L7.50232 14C6.5677 14 6.10039 14 5.75232 14.201C4.91895 14.6821 5.00232 15.6561 5.00232 16.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
