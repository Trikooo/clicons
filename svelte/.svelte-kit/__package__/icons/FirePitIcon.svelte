<script lang="ts">
  import config from '../config';

  /**
   * @component FirePitIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/fire-pit)
   * @see {@link https://clicons.dev/icon/fire-pit} - Icon preview
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
  <path d="M9.10448 17.5C8.33359 16.5723 8.42384 15.1986 8.69771 14.3155C13.1751 16.5 13.7595 12.5 13.4229 11.5C14.9282 12.5 16.3877 15.9189 14.8371 17.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.81631 17.5C5.5924 16.4286 4.76862 11.5478 6.12929 8.92857C7.12501 11.0714 8.75001 11.0714 8.75001 11.0714C7.66668 6.78571 9.83335 3.57143 14.0108 2.5C13.1918 4.001 12.5366 6.34631 14.197 7.84902C14.5485 7.18039 15.7296 5.71429 17.4167 5.71429C17.4167 5.71429 16.1196 8.01619 17.5273 10.0221C19.152 12.3372 18.736 15.7851 16.3196 17.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.5 17.5H3.5L4.1601 19.9851C4.4949 21.2455 4.84122 21.5 6.22165 21.5H17.7783C19.1588 21.5 19.5051 21.2455 19.8399 19.9851L20.5 17.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M3.55556 17.5H2.5M20.4444 17.5H21.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
