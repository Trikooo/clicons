<script lang="ts">
  import config from '../config';

  /**
   * @component PinCodeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/pin-code)
   * @see {@link https://clicons.dev/icon/pin-code} - Icon preview
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
  <path d="M4.07407 7.92857C5.23724 6.24613 5.81883 5.40491 6.65298 4.95245C7.48714 4.5 8.45645 4.5 10.3951 4.5H15.0864C17.8607 4.5 19.2478 4.5 20.2442 5.22227C20.6756 5.53495 21.046 5.93674 21.3342 6.4047C22 7.48566 22 8.99044 22 12C22 15.0096 22 16.5143 21.3342 17.5953C21.046 18.0633 20.6756 18.465 20.2442 18.7777C19.2478 19.5 17.8607 19.5 15.0864 19.5H10.3951C8.45645 19.5 7.48714 19.5 6.65298 19.0475C5.81883 18.5951 5.23724 17.7539 4.07407 16.0714L3.92593 15.8571C2.64198 14 2 13.0714 2 12C2 10.9286 2.64198 10 3.92593 8.14286L4.07407 7.92857Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M8.99981 12H9.00879" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M12.9998 12H13.0088" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M16.9998 12H17.0088" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
