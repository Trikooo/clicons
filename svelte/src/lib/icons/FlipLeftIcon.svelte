<script lang="ts">
  import config from '../config';

  /**
   * @component FlipLeftIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/flip-left)
   * @see {@link https://clicons.dev/icon/flip-left} - Icon preview
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
  <path d="M2 9.66676V14.3334M7.5 3.01509C7.99962 2.99793 8.49991 2.99705 9 2.99855M7.5 20.9849C7.99962 21.0021 8.49991 21.003 9 21.0015M4.74533 3.53709C3.78698 4.02122 3.00864 4.80249 2.52818 5.76305M2.5 18.1797C2.9779 19.1665 3.76801 19.9692 4.74533 20.4629" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 5.5049C12 3.54683 12.6378 3.00683 14.5 3.00683C17.0317 3.00683 19.9537 2.7569 21.3971 5.25509C22 6.29851 22 7.69935 22 10.501V13.4987C22 16.3004 22 17.7012 21.3971 18.7447C19.9537 21.2429 17.0317 20.9929 14.5 20.9929C12.6378 20.9929 12 20.4529 12 18.4949V5.5049Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
</svg>
