<script lang="ts">
  import config from '../config';

  /**
   * @component StethoscopeIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/stethoscope)
   * @see {@link https://clicons.dev/icon/stethoscope} - Icon preview
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
  <path d="M13.0014 2C14.1053 2 15.0003 2.93126 15.0003 4.08003C15.0003 5.02915 15.0362 5.87375 14.2692 6.57196C11.7587 8.85732 10.5034 10 9.00027 10C7.49714 10 6.24187 8.85732 3.73133 6.57196C2.96426 5.87369 3.00027 5.029 3.00027 4.07981C3.00027 2.93116 3.8951 2 4.99893 2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M9 14V17.4998C9 19.9852 11.0149 22.0001 13.5003 22.0001C15.9858 22.0001 18.0007 19.9852 18.0007 17.4998V16" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14 7L12.6978 10.2556C12.3516 11.121 12.1785 11.5537 11.8887 11.9092C11.5988 12.2648 11.2098 12.5215 10.4319 13.0349L8.9696 14L7.53283 13.0323C6.77221 12.5201 6.39189 12.2639 6.10821 11.9126C5.82452 11.5613 5.65423 11.1356 5.31365 10.2841L4 7" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21 13C21 14.6569 19.6569 16 18 16C16.3431 16 15 14.6569 15 13C15 11.3431 16.3431 10 18 10C19.6569 10 21 11.3431 21 13Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M18.008 13L17.999 13" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
