<script lang="ts">
  import config from '../config';

  /**
   * @component MonsterIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/monster)
   * @see {@link https://clicons.dev/icon/monster} - Icon preview
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
  <path d="M12 11.5H12.009" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  <path d="M16.5 11.5C16.5 13.433 14.4853 15 12 15C9.51472 15 7.5 13.433 7.5 11.5C7.5 9.567 9.51472 8 12 8C14.4853 8 16.5 9.567 16.5 11.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M14 18C13.4846 18.3093 12.7787 18.5 12 18.5C11.2213 18.5 10.5154 18.3093 10 18" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 14.5752 4.24365 16.4767 5.47899 17.9525C6.06977 18.6583 6.5 19.5115 6.5 20.4319C6.5 21.2979 7.20207 22 8.06812 22H15.9319C16.7979 22 17.5 21.2979 17.5 20.4319C17.5 19.5115 17.9302 18.6583 18.521 17.9525C19.7564 16.4767 20.5 14.5752 20.5 12.5C20.5 7.80558 16.6944 4 12 4Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M16 5C16.1667 4.1 17 2.24 19 2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M8 5C7.83333 4.1 7 2.24 5 2" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
