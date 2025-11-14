<script lang="ts">
  import config from '../config';

  /**
   * @component UserUnlockIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/user-unlock)
   * @see {@link https://clicons.dev/icon/user-unlock} - Icon preview
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
  <path d="M14.502 8C14.502 5.23858 12.2635 3 9.50204 3C6.74062 3 4.50204 5.23858 4.50204 8C4.50204 10.7614 6.74062 13 9.50204 13C12.2635 13 14.502 10.7614 14.502 8Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M16.2375 15.6747V14.2523C16.2375 13.2845 17.022 12.5 17.9898 12.5C18.4669 12.5 18.8995 12.6907 19.2155 13M16.307 21H19.693C20.6899 21 21.498 20.1934 21.498 19.1984V17.6947C21.498 16.6997 20.6899 15.8931 19.693 15.8931H16.307C15.3102 15.8931 14.502 16.6997 14.502 17.6947L14.502 19.1984C14.502 20.1934 15.3102 21 16.307 21Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M2.50204 20C2.50204 16.134 5.63605 13 9.50204 13C10.9893 13 12.3682 13.4638 13.502 14.2547" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
