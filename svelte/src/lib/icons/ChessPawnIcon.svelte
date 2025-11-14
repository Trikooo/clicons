<script lang="ts">
  import config from '../config';

  /**
   * @component ChessPawnIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/chess-pawn)
   * @see {@link https://clicons.dev/icon/chess-pawn} - Icon preview
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
  <path d="M9.5 10C9.5 12.6667 9 15.3333 7 18M14.5 10C14.5 12.6667 15 15.3333 17 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.5 5.42857C15.5 6.18741 15.2483 6.88867 14.8223 7.45663C14.4776 7.91614 14.134 8 13.5704 8H10.4296C9.866 8 9.52236 7.91614 9.17768 7.45663C8.75166 6.88867 8.5 6.18741 8.5 5.42857C8.5 3.53502 10.067 2 12 2C13.933 2 15.5 3.53502 15.5 5.42857Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8 10H16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M4.2049 20.6489L4.22572 20.5955C5.06668 18.4398 5.72681 18 8.12187 18H15.8781C18.2732 18 18.9333 18.4398 19.7743 20.5955L19.7951 20.6489C20.2188 21.735 20.0278 22 18.8211 22H5.17893C3.9722 22 3.78118 21.735 4.2049 20.6489Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
