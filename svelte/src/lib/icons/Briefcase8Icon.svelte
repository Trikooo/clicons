<script lang="ts">
  import config from '../config';

  /**
   * @component Briefcase8Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/briefcase8)
   * @see {@link https://clicons.dev/icon/briefcase8} - Icon preview
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
  <path d="M1.99934 14L1.99935 13.4999C1.99935 10.2 1.99936 8.55012 3.02448 7.525C4.04961 6.49988 5.69952 6.49988 8.99935 6.49988H15.0005C18.2999 6.49988 19.9495 6.49988 20.9746 7.5248C21.9997 8.54971 22 10.1994 22.0005 13.4987L22.0006 13.999C22.0012 17.2994 22.0015 18.9496 20.9763 19.9749C19.9511 21.0003 18.3009 21.0002 15.0005 21.0002L8.99919 21C5.69941 21 4.04953 20.9999 3.02443 19.9748C1.99933 18.9497 1.99934 17.2998 1.99934 14Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.49934 6.49988C8.49934 5.09542 8.49934 4.39318 8.8364 3.88874C8.98232 3.67036 9.16982 3.48286 9.3882 3.33694C9.89265 2.99988 10.5949 2.99988 11.9993 2.99988C13.4038 2.99988 14.106 2.99988 14.6105 3.33694C14.8289 3.48286 15.0164 3.67036 15.1623 3.88874C15.4993 4.39318 15.4993 5.09542 15.4993 6.49988" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5.99924 10.4999H17.9992" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
