<script lang="ts">
  import config from '../config';

  /**
   * @component LinkBackwardIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/link-backward)
   * @see {@link https://clicons.dev/icon/link-backward} - Icon preview
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
  <path d="M11 8.5H10.5V4.69635C10.5 4.31176 10.1882 4 9.80365 4C9.61002 4 9.42513 4.08062 9.29338 4.22252L3.34023 10.6336C3.12154 10.8691 3 11.1786 3 11.5C3 11.8214 3.12154 12.1309 3.34023 12.3664L9.29338 18.7775C9.42513 18.9194 9.61002 19 9.80365 19C10.1882 19 10.5 18.6882 10.5 18.3037V14.5C16.0544 14.5 19.0531 18.5162 19.808 19.6847C19.9326 19.8776 20.1429 20 20.3725 20C20.7191 20 21 19.7191 21 19.3725V18.5C21 12.9772 16.5228 8.5 11 8.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinejoin="round" strokeWidth="1.5" />
</svg>
