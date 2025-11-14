<script lang="ts">
  import config from '../config';

  /**
   * @component DirectionLeft2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/direction-left2)
   * @see {@link https://clicons.dev/icon/direction-left2} - Icon preview
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
  <path d="M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14 21L14 11" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14 4L14 3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M10 21H18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
