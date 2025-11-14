<script lang="ts">
  import config from '../config';

  /**
   * @component RubiksCubeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/rubiks-cube)
   * @see {@link https://clicons.dev/icon/rubiks-cube} - Icon preview
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
  <path d="M8.64298 3.5853C10.2952 2.86177 11.1214 2.5 12 2.5C12.8786 2.5 13.7048 2.86177 15.357 3.5853L17.0618 4.33185C19.6873 5.48154 21 6.05639 21 7C21 7.94361 19.6873 8.51846 17.0618 9.66815L15.357 10.4147C13.7048 11.1382 12.8786 11.5 12 11.5C11.1214 11.5 10.2952 11.1382 8.64298 10.4147L6.93817 9.66815C4.31272 8.51846 3 7.94361 3 7C3 6.05639 4.31272 5.48154 6.93816 4.33185L8.64298 3.5853Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 7V18C21 18.9436 19.6873 19.5185 17.0618 20.6682L15.357 21.4147C13.7048 22.1382 12.8786 22.5 12 22.5C11.1214 22.5 10.2952 22.1382 8.64298 21.4147L6.93817 20.6682C4.31272 19.5185 3 18.9436 3 18V7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 13L12 17.5L3 13.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 22.5V11.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.5 20.5V9.5L7 4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.5 20.5V9.5L17 4.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
