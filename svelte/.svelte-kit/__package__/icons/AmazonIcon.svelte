<script lang="ts">
  import config from '../config';

  /**
   * @component AmazonIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/amazon)
   * @see {@link https://clicons.dev/icon/amazon} - Icon preview
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
  <path d="M7 6L9.5 7C9.5 7 10 5 12 5C13.6 5 14.1664 6.86545 14 8.5C7.5 8.5 6.5 11.5 6.5 13C6.5 14.5 7.5 17 10.5 17C13 17 14.5 15 14.5 15L15.5 16.5L18 14.5C18 14.5 17 13.6667 17 12.5V9C17 9 17.6681 2.5 12 2.5C7.6 2.5 7 6 7 6Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13.5 10.8555C13.5 12.3555 12.5805 14.3555 11.2014 14.3555C9.30586 14.3555 9.36245 10.8555 13.5 10.8555Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2 17.5C2 17.5 10.5 23.5844 19 19.5281C19 19.5281 10.5 25.1056 2 17.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.99 17.7025C22.136 19.0999 20.6414 21 20.6414 21C20.6414 21 21.6208 19.4076 21.4245 17.7025C19.8212 17.0648 18 17.7895 18 17.7895C18 17.7895 19.5024 16.685 21.4245 17.0888C21.7265 17.1522 21.9579 17.3956 21.99 17.7025Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
