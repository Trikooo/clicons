<script lang="ts">
  import config from '../config';

  /**
   * @component TaskRemove2Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/task-remove2)
   * @see {@link https://clicons.dev/icon/task-remove2} - Icon preview
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
  <path d="M19.25 14V8C19.25 5.17157 19.25 3.75736 18.3713 2.87868C17.4926 2 16.0784 2 13.25 2H9.25C6.42157 2 5.00736 2 4.12868 2.87868C3.25 3.75736 3.25 5.17157 3.25 8V16C3.25 18.8284 3.25 20.2426 4.12868 21.1213C5.00736 22 6.42157 22 9.25 22H13.25" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M14.75 2H7.75C7.75 3.41421 7.75 4.12132 8.18934 4.56066C8.62868 5 9.33579 5 10.75 5H11.75C13.1642 5 13.8713 5 14.3107 4.56066C14.75 4.12132 14.75 3.41421 14.75 2Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M7.25 15H11.25M7.25 11H15.25" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M21.25 17L18.75 19.5M18.75 19.5L16.25 22M18.75 19.5L21.25 22M18.75 19.5L16.25 17" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
