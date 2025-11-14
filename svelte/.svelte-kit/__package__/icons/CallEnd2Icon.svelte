<script lang="ts">
  import config from '../config';

  /**
   * @component CallEnd2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/call-end2)
   * @see {@link https://clicons.dev/icon/call-end2} - Icon preview
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
  <path d="M17.0539 6.02918V8.79278C17.0539 9.35653 17.4143 9.87054 17.9747 10.1385C18.413 10.3481 18.9322 10.6067 19.3546 10.847C19.7452 11.0692 20.293 11.0557 20.6214 10.765L21.5133 9.97573C22.17 9.3945 22.1749 8.44418 21.4501 7.93021C15.9402 4.02326 8.05983 4.02326 2.54993 7.93021C1.82509 8.44418 1.82997 9.3945 2.48673 9.97573L3.3786 10.765C3.70697 11.0557 4.24369 11.0574 4.62554 10.8235C5.0468 10.5655 5.53006 10.3258 5.94613 10.1356C6.54384 9.86234 6.94607 9.3266 6.94607 8.73122V6.02918" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.5 15.5C9.18814 16.208 11.0197 19 12 19C12.9803 19 14.8119 16.208 15.5 15.5M12 18.5V11" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
