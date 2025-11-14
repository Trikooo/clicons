<script lang="ts">
  import config from '../config';

  /**
   * @component RadioIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/radio)
   * @see {@link https://clicons.dev/icon/radio} - Icon preview
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
  <path d="M14 5C17.7712 5 19.6569 5 20.8284 6.2448C22 7.48959 22 9.49306 22 13.5C22 17.5069 22 19.5104 20.8284 20.7552C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7552C2 19.5104 2 17.5069 2 13.5C2 9.49306 2 7.48959 3.17157 6.2448C4.34315 5 6.22876 5 10 5L14 5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M17.3965 11.2504C18.6389 13.4023 17.9016 16.154 15.7496 17.3965C13.5977 18.6389 10.846 17.9016 9.60354 15.7496M17.3965 11.2504C16.154 9.09842 13.4023 8.3611 11.2504 9.60354C9.09842 10.846 8.3611 13.5977 9.60354 15.7496M17.3965 11.2504L9.60354 15.7496" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M17 2L7 5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M6 9H6.00898" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
