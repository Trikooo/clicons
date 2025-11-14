<script lang="ts">
  import config from '../config';

  /**
   * @component Napkins2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/napkins2)
   * @see {@link https://clicons.dev/icon/napkins2} - Icon preview
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
  <path d="M17.129 9.93457L15.5593 6.7402C14.0063 3.5797 13.2297 1.99945 12 1.99945C10.7703 1.99945 9.99374 3.5797 8.44067 6.7402L6.87095 9.93457C6.22703 11.245 5.90506 11.9002 6.02457 12.5651C6.14407 13.2301 6.67308 13.7269 7.7311 14.7207L9.30082 16.195C10.5816 17.398 11.222 17.9995 12 17.9995C12.778 17.9995 13.4184 17.398 14.6992 16.195L16.2689 14.7207C17.3269 13.7269 17.8559 13.2301 17.9754 12.5651C18.0949 11.9002 17.773 11.245 17.129 9.93457Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M17.129 13.9346C17.773 15.245 18.0949 15.9002 17.9754 16.5651C17.8559 17.2301 17.3269 17.7269 16.2689 18.7207L14.6992 20.195C13.4184 21.398 12.778 21.9995 12 21.9995C11.222 21.9995 10.5816 21.398 9.30082 20.195L7.7311 18.7207C6.67308 17.7269 6.14407 17.2301 6.02457 16.5651C5.90506 15.9002 6.22703 15.245 6.87095 13.9346" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.5 9.5L12 14L7.5 9.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
