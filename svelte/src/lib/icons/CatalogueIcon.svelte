<script lang="ts">
  import config from '../config';

  /**
   * @component CatalogueIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/catalogue)
   * @see {@link https://clicons.dev/icon/catalogue} - Icon preview
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
  <path d="M14.5 17.5V7.5H7.5001C5.1431 7.5 3.9646 7.5 3.23237 8.23222C2.50013 8.96445 2.50012 10.1429 2.5001 12.5L2.50006 16.5C2.50004 18.857 2.50003 20.0355 3.23226 20.7678C3.9645 21.5 5.14302 21.5 7.50006 21.5H10.5C12.3856 21.5 13.3284 21.5 13.9142 20.9142C14.5 20.3284 14.5 19.3856 14.5 17.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.4999 16.5H16.4999C18.8569 16.5 20.0355 16.5 20.7677 15.7678C21.4999 15.0355 21.4999 13.857 21.4999 11.5V7.5C21.4999 5.14298 21.4999 3.96447 20.7677 3.23223C20.0355 2.5 18.8569 2.5 16.4999 2.5H9.50006L9.5002 7.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M5.50006 12.5H9.00006M5.50006 16.5H11.5001" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9.50006 2.5L14.5001 7.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
