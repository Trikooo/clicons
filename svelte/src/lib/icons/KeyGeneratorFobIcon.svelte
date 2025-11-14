<script lang="ts">
  import config from '../config';

  /**
   * @component KeyGeneratorFobIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/key-generator-fob)
   * @see {@link https://clicons.dev/icon/key-generator-fob} - Icon preview
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
  <path d="M12 22C15.866 22 19 18.8659 19 15C19 12.5994 18.2288 8.16743 17.6442 5.15254C17.3548 3.66024 17.2101 2.91408 16.6559 2.45704C16.1018 2 15.3282 2 13.7811 2H10.2189C8.6718 2 7.89823 2 7.34406 2.45704C6.78988 2.91408 6.64519 3.66023 6.35582 5.15254C5.7712 8.16743 5 12.5994 5 15C5 18.8659 8.13399 22 12 22Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16 15C16 17.2091 14.2091 19 12 19C9.79085 19 8 17.2091 8 15C8 12.7909 9.79085 11 12 11C14.2091 11 16 12.7909 16 15Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 5V6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
