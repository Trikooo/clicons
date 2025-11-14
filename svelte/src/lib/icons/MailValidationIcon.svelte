<script lang="ts">
  import config from '../config';

  /**
   * @component MailValidationIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/mail-validation)
   * @see {@link https://clicons.dev/icon/mail-validation} - Icon preview
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
  <path d="M6.91211 6.83789L9.85413 8.57732C11.5693 9.59141 12.2549 9.59141 13.9701 8.57732L16.9121 6.83789" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.9121 17.3379C14.9121 17.3379 15.4121 17.3379 15.9121 18.3379C15.9121 18.3379 17.5003 15.8379 18.9121 15.3379" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 10.3118L21.9589 6.43829C21.9478 4.96285 21.1512 2.01198 18.0539 2.01198H6.10527C4.73685 1.91134 2 2.34718 2 7.1423V14.2514C2.00001 15.472 2.27229 17.115 3.61079 18.1055C4.47577 18.7456 5.61117 18.8049 6.68416 18.858L8.93115 18.9692" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.9809 16.9588C21.9809 19.7427 19.7346 21.9995 16.9636 21.9995C14.1926 21.9995 11.9463 19.7427 11.9463 16.9588C11.9463 14.1748 14.1926 11.918 16.9636 11.918C19.7346 11.918 21.9809 14.1748 21.9809 16.9588Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
