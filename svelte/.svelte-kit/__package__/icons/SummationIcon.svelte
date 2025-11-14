<script lang="ts">
  import config from '../config';

  /**
   * @component SummationIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/summation)
   * @see {@link https://clicons.dev/icon/summation} - Icon preview
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
  <path d="M19 17.1429C19 18.6464 19 19.3982 18.6504 19.9471C18.468 20.2333 18.2227 20.4753 17.9325 20.6551C17.3761 21 16.6139 21 15.0895 21H9.19861C6.61368 21 5.32121 21 5.04567 20.2653C4.77014 19.5306 5.75145 18.701 7.71408 17.0417L11.6568 13.7083C12.5958 12.9144 13.0654 12.5174 13.0654 12C13.0654 11.4826 12.5958 11.0856 11.6568 10.2917L7.71408 6.95833C5.75145 5.29902 4.77014 4.46937 5.04567 3.73469C5.32121 3 6.61368 3 9.19861 3H15.0895C16.6139 3 17.3761 3 17.9325 3.34487C18.2227 3.52471 18.468 3.76672 18.6504 4.05293C19 4.60179 19 5.35357 19 6.85714" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
