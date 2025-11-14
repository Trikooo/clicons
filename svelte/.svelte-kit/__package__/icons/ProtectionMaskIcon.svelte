<script lang="ts">
  import config from '../config';

  /**
   * @component ProtectionMaskIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/protection-mask)
   * @see {@link https://clicons.dev/icon/protection-mask} - Icon preview
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
  <path d="M4.27574 22V18.4493C4.27574 17.172 3.93486 16.5167 3.26456 15.4113C2.46115 14.0864 2 12.5402 2 10.8889C2 5.97969 6.07554 2 11.103 2C15.4666 2 19.1132 4.99817 20 9" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M15.0752 14.8454L18.991 12.4141C19.0832 12.3568 19.1294 12.3282 19.1753 12.3058C19.2213 12.2834 19.2749 12.2638 19.382 12.2245C19.933 12.0226 20.5435 11.8047 21.0395 12.2243C21.3015 12.4459 21.4245 12.8352 21.6707 13.6138C21.8649 14.2282 22.0806 14.8351 21.9699 15.487C21.9119 15.8283 21.7602 16.1483 21.4567 16.7883L20.0275 19.8024C19.4737 20.9703 19.1968 21.5542 18.2759 21.8609C17.3551 22.1675 16.9484 21.9358 16.135 21.4725C12.4487 19.3724 5.30998 13.2604 7.36438 10.4879C8.14017 9.44098 10.1234 9.73499 15.0752 14.8454ZM15.0752 14.8454L14.0098 20.0793" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
