<script lang="ts">
  import config from '../config';

  /**
   * @component ClipartsIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/cliparts)
   * @see {@link https://clicons.dev/icon/cliparts} - Icon preview
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
  <path d="M12.0142 22C16.982 22 21.105 18.3826 21.8927 13.6382C22.0029 12.9744 22.058 12.6425 21.9099 12.1809C21.7618 11.7193 21.4596 11.417 20.8551 10.8126L13.1874 3.14488C12.583 2.54042 12.2807 2.23819 11.8191 2.0901C11.3575 1.94201 11.0256 1.99711 10.3618 2.10732C5.61741 2.89501 2 7.01797 2 11.9858C2 17.5165 6.4835 22 12.0142 22Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 2.5C12 7.21405 12 9.07107 13.4645 10.5355C14.9289 12 16.786 12 21.5 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
