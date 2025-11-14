<script lang="ts">
  import config from '../config';

  /**
   * @component Knife2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/knife2)
   * @see {@link https://clicons.dev/icon/knife2} - Icon preview
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
  <path d="M14.1468 17.7161C14.5276 17.6191 14.8277 17.2686 15.4279 16.5674L20.6144 10.5083C22.5236 8.27791 23.2538 5.16032 21.5179 2.53909C20.9426 1.67029 19.9814 1.97862 19.3802 2.57285L3.07422 18.6916C2.30859 19.4484 2.30859 20.6755 3.07422 21.4323C3.94222 22.2903 5.38535 22.1577 6.07852 21.1563C7.02528 19.7884 8.50705 16.2711 10.1582 15.6456C11.871 14.9968 12.4676 18.1437 14.1468 17.7161Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
