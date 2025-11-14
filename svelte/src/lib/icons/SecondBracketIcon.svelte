<script lang="ts">
  import config from '../config';

  /**
   * @component SecondBracketIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/second-bracket)
   * @see {@link https://clicons.dev/icon/second-bracket} - Icon preview
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
  <path d="M17.225 3C18.6145 3.15381 19.5498 3.50143 20.2479 4.28705C21.5 5.69617 21.5 7.96411 21.5 12.5C21.5 17.0359 21.5 19.3038 20.2479 20.713C19.5498 21.4986 18.6145 21.8462 17.225 22M6.77501 22C5.38551 21.8462 4.45021 21.4986 3.75212 20.713C2.5 19.3038 2.5 17.0359 2.5 12.5C2.5 7.96411 2.5 5.69617 3.75212 4.28705C4.45021 3.50143 5.38551 3.15381 6.77501 3" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
