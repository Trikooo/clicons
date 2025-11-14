<script lang="ts">
  import config from '../config';

  /**
   * @component PoundReceiveIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pound-receive)
   * @see {@link https://clicons.dev/icon/pound-receive} - Icon preview
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
  <path d="M14.25 13.025H21.75M14.25 13.025C14.25 13.7252 16.25 15.025 17.25 15.525M14.25 13.025C14.25 12.3248 16.4167 11.025 17.25 10.525" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12.662 8.52496C12.662 6.40432 10.9917 3.91079 8.25 4.00226C7.52476 4.02646 6.72455 4.25839 5.86047 4.767C4.4716 5.68473 2.67966 8.73584 4.84287 11.9369C5.89496 13.4937 6.86653 13.525 9.75 13.525H2.25M6.703 14.0072C6.16468 15.5014 4.53524 18.8987 2.32404 19.9869H11.2098C11.6185 19.9869 12.8337 20.1991 14.229 18.924" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
