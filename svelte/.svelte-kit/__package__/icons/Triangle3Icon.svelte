<script lang="ts">
  import config from '../config';

  /**
   * @component Triangle3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/triangle3)
   * @see {@link https://clicons.dev/icon/triangle3} - Icon preview
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
  <path d="M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56858 4.04626C4.13717 3.81205 4.80633 4.47751 6.14468 5.80841L18.2764 17.8728C19.6148 19.2037 20.2839 19.8692 20.0484 20.4346C19.8129 21 18.8665 21 16.9739 21H6.68422C4.94747 21 4.07908 21 3.53955 20.4635C3 19.9269 3 19.0634 3 17.3362Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.9159 12.8369L17.4805 9.42001M20.9159 12.8369C21.078 12.6772 20.9581 11.3527 20.9461 10.5134M20.9159 12.8369C20.7539 12.9967 19.9987 12.8894 18.6077 12.8184" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M11.129 3.08307L14.5645 6.5M11.129 3.08307C10.967 3.24282 11.0868 4.56733 11.0988 5.40659M11.129 3.08307C11.2911 2.92332 12.0462 3.03064 13.4372 3.10157" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.9087 3.08363L17.4727 6.5M20.9087 3.08363C20.748 2.92247 19.4161 3.04169 18.5722 3.05362M20.9087 3.08363C21.0693 3.24479 20.9614 3.99571 20.8901 5.37903" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <ellipse cx="16.0878" cy="8.01465" rx="1.38268" ry="1.375" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
