<script lang="ts">
  import config from '../config';

  /**
   * @component AiFileIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/ai-file)
   * @see {@link https://clicons.dev/icon/ai-file} - Icon preview
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
  <path d="M19 11.0032V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2H10.0082L3 8.98648V14.0062C3 17.7714 3 19.654 4.16811 20.825L4.17504 20.8319C5.34602 22 7.2286 22 10.9938 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3 9.00195H4C6.82843 9.00195 8.24264 9.00195 9.12132 8.12327C10 7.24459 10 5.83038 10 3.00195V2.00195" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.4069 21.5983C16.6192 22.1365 17.3808 22.1365 17.5931 21.5983L17.6298 21.5051C18.1482 20.1906 19.1887 19.1502 20.5031 18.6318L20.5964 18.595C21.1345 18.3828 21.1345 17.6211 20.5964 17.4089L20.5031 17.3721C19.1887 16.8537 18.1482 15.8133 17.6298 14.4989L17.5931 14.4056C17.3808 13.8674 16.6192 13.8674 16.4069 14.4056L16.3702 14.4989C15.8518 15.8133 14.8113 16.8537 13.4969 17.3721L13.4036 17.4089C12.8655 17.6211 12.8655 18.3828 13.4036 18.595L13.4969 18.6318C14.8113 19.1502 15.8518 20.1906 16.3702 21.5051L16.4069 21.5983Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
