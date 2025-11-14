<script lang="ts">
  import config from '../config';

  /**
   * @component MailEdit2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mail-edit2)
   * @see {@link https://clicons.dev/icon/mail-edit2} - Icon preview
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
  <path d="M7.00235 7.75L9.94437 9.48943C11.6596 10.5035 12.3451 10.5035 14.0603 9.48943L17.0023 7.75" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.9977 10.75V9.77844C21.9323 6.71114 21.8996 5.17749 20.7679 4.04141C19.6361 2.90532 18.061 2.86574 14.9107 2.78659C12.9692 2.73781 11.0467 2.7378 9.10511 2.78658C5.95487 2.86573 4.37975 2.9053 3.24799 4.04139C2.11624 5.17748 2.08353 6.71113 2.01812 9.77843C1.99709 10.7647 1.99709 11.7451 2.01812 12.7314C2.08354 15.7987 2.11624 17.3323 3.248 18.4684C4.37975 19.6045 5.95487 19.6441 9.10512 19.7232C9.57337 19.735 10.5358 19.7439 11.0024 19.75" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M20.8546 13.6893L21.547 14.3817C22.1327 14.9675 22.1327 15.9172 21.547 16.503L17.9196 20.1987C17.6342 20.484 17.2692 20.6764 16.8725 20.7505L14.6244 21.2385C14.2694 21.3156 13.9533 21.0004 14.0294 20.6452L14.5079 18.4099C14.582 18.0132 14.7743 17.6482 15.0597 17.3629L18.7333 13.6893C19.3191 13.1036 20.2688 13.1036 20.8546 13.6893Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
