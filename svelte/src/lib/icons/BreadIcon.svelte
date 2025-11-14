<script lang="ts">
  import config from '../config';

  /**
   * @component BreadIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/bread)
   * @see {@link https://clicons.dev/icon/bread} - Icon preview
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
  <path d="M3.19405 14.077C1.94563 15.3082 1.84437 17.6176 2.13655 19.7508C2.40166 21.6864 4.57937 22.5986 6.21199 21.5763C9.1986 19.7061 12.3179 17.2421 15.3067 14.2947C18.3772 11.2666 20.0596 8.96143 21.5435 6.36753C22.4433 4.79463 22.0218 2.69734 20.1997 2.23223C18.2048 1.72304 15.6191 1.93195 13.3375 4.0775M3.19405 14.077C2.36031 10.337 5.29027 5.93188 12.1656 9.7943M3.19405 14.077C3.81736 14.0897 5.21758 14.3717 6.5544 15.3245M6.84592 8.19547C6.90898 6.25487 8.82259 3.00486 13.3375 4.0775M13.3375 4.0775C14.304 4.30712 15.3897 4.73482 16.602 5.41585" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
