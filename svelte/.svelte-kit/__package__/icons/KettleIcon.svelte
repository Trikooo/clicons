<script lang="ts">
  import config from '../config';

  /**
   * @component KettleIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/kettle)
   * @see {@link https://clicons.dev/icon/kettle} - Icon preview
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
  <path d="M7 7L4.83809 7.49321C3.33351 7.83646 2.58121 8.00809 2.21219 8.64897C1.84317 9.28985 2.00392 10.1455 2.32541 11.8569L2.77129 14.2305C3.19487 16.4852 4.34422 17.2445 6 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M7.14058 7.78149L6.11202 18.5819C5.9597 20.1813 5.88354 20.9809 6.41933 21.4905C6.95512 22 7.87218 22 9.70631 22H16.2937C18.1278 22 19.0449 22 19.5807 21.4905C20.1165 20.9809 20.0403 20.1813 19.888 18.5819L18.8594 7.78149C18.5414 4.44177 16.0794 3 13 3C9.92061 3 7.45864 4.44177 7.14058 7.78149Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M8 7H20.9781C21.8375 7 22.1357 7.22852 21.9445 8.24057C21.6209 9.95337 20.6421 11.351 19.3558 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M12 17C12 14 14 15 14 12" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M13 3V2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
