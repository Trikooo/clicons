<script lang="ts">
  import config from '../config';

  /**
   * @component UserSettingsIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/user-settings)
   * @see {@link https://clicons.dev/icon/user-settings} - Icon preview
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
  <path d="M14.5 7.5C14.5 4.73858 12.2614 2.5 9.5 2.5C6.73858 2.5 4.5 4.73858 4.5 7.5C4.5 10.2614 6.73858 12.5 9.5 12.5C12.2614 12.5 14.5 10.2614 14.5 7.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2.5 19.5C2.5 15.634 5.63401 12.5 9.5 12.5C10.5736 12.5 11.5907 12.7417 12.5 13.1736" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M18 20C18.9293 20 19.7402 19.493 20.171 18.7404M18 20C17.0707 20 16.2598 19.493 15.829 18.7404M18 20L18 21.5M18 15C18.9292 15 19.74 15.5069 20.1709 16.2593M18 15C17.0708 15 16.26 15.5069 15.8291 16.2593M18 15L18 13.5M21.5 15.4998L20.1709 16.2593M14.5 19.4998L15.829 18.7404M21.5 19.4998L20.171 18.7404M14.5 15.4998L15.8291 16.2593M20.1709 16.2593C20.3803 16.6249 20.5 17.0485 20.5 17.5C20.5 17.9514 20.3804 18.3749 20.171 18.7404M15.829 18.7404C15.6196 18.3749 15.5 17.9514 15.5 17.5C15.5 17.0485 15.6197 16.6249 15.8291 16.2593" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
