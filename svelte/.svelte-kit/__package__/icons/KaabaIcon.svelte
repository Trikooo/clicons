<script lang="ts">
  import config from '../config';

  /**
   * @component KaabaIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/kaaba)
   * @see {@link https://clicons.dev/icon/kaaba} - Icon preview
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
  <path d="M3.5 22V5.9907C3.5 5.25783 3.5 4.8914 3.70387 4.62261C3.90774 4.35383 4.26006 4.25575 4.96471 4.0596L11.9647 2.11106C12.2307 2.03702 12.3637 2 12.5 2C12.6363 2 12.7693 2.03702 13.0353 2.11106L20.0353 4.0596C20.7399 4.25575 21.0923 4.35383 21.2961 4.62261C21.5 4.8914 21.5 5.25783 21.5 5.9907V22" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M2.5 22H22.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M3.5 9L12.0661 7.04882C12.3519 6.98373 12.6481 6.98373 12.9339 7.04882L21.5 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M20.15 12.7L21.5 13M16.1 11.8L17 12M13.4 11.2L12.5 11L11.6 11.2M4.85 12.7L3.5 13M8.9 11.8L8 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12.5 7V22" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
