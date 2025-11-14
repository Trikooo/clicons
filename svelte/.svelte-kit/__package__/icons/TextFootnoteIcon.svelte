<script lang="ts">
  import config from '../config';

  /**
   * @component TextFootnoteIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/text-footnote)
   * @see {@link https://clicons.dev/icon/text-footnote} - Icon preview
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
  <path d="M19.75 5.88792L19.7494 8.72342M19.7494 8.72342L22 7.7061M19.7494 8.72342L17.5 7.7061M19.7494 8.72342L17.95 10.8879M19.7494 8.72342L21.55 10.8879" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 21.0017H6" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M16 5.99779C16 5.34082 16 5.01235 15.9194 4.7245C15.7518 4.12577 15.3066 3.61001 14.7541 3.37477C14.4886 3.26167 14.1885 3.2296 13.5884 3.16547C12.1695 3.01383 10.3874 2.99779 9 2.99779C7.61262 2.99779 5.83047 3.01383 4.41161 3.16547C3.8115 3.2296 3.51144 3.26167 3.24586 3.37477C2.69344 3.61001 2.24816 4.12577 2.08057 4.7245C2 5.01235 2 5.34082 2 5.99779" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M9 3.34984L9 21.0015" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
