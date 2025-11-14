<script lang="ts">
  import config from '../config';

  /**
   * @component Magnet2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/magnet2)
   * @see {@link https://clicons.dev/icon/magnet2} - Icon preview
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
  <path d="M16 10V9C16 8.05719 16 7.58579 16.2929 7.29289C16.5858 7 17.0572 7 18 7C18.9428 7 19.4142 7 19.7071 7.29289C20 7.58579 20 8.05719 20 9V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V9C8 8.05719 8 7.58579 7.70711 7.29289C7.41421 7 6.94281 7 6 7C5.05719 7 4.58579 7 4.29289 7.29289C4 7.58579 4 8.05719 4 9V10M8 10L4 10" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12.5 1.99982L10.625 4.99982H13.625L11.75 7.99982" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
