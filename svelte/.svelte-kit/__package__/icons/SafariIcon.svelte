<script lang="ts">
  import config from '../config';

  /**
   * @component SafariIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/safari)
   * @see {@link https://clicons.dev/icon/safari} - Icon preview
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
  <path d="M13.7214 13.7214C14.1043 13.3385 14.3231 12.828 14.7607 11.807L16.3172 8.17504C16.4736 7.81011 16.5518 7.62764 16.4621 7.53789C16.3724 7.44815 16.1899 7.52635 15.825 7.68275L12.193 9.23929C11.172 9.67688 10.6615 9.89567 10.2786 10.2786M13.7214 13.7214C13.3385 14.1043 12.828 14.3231 11.807 14.7607L8.17504 16.3172C7.81011 16.4736 7.62764 16.5518 7.53789 16.4621C7.44815 16.3724 7.52635 16.1899 7.68275 15.825L9.23929 12.193C9.67688 11.172 9.89567 10.6615 10.2786 10.2786M13.7214 13.7214L10.2786 10.2786" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 2L12 3.5M12 22L12 20.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 12L20.5 12M2 12L3.5 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
