<script lang="ts">
  import config from '../config';

  /**
   * @component DragLeft3Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/drag-left3)
   * @see {@link https://clicons.dev/icon/drag-left3} - Icon preview
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
  <path d="M13.0659 9.72218H14.0032C15.0386 9.72218 15.878 10.5679 15.878 11.6111M15.878 11.6111V12.5555M15.878 11.6111C15.878 11.0895 16.2976 10.6666 16.8153 10.6666C17.8507 10.6666 18.6902 11.5123 18.6902 12.5555M18.6902 12.5555V13.4999M18.6902 12.5555C18.6902 12.0611 19.1307 11.685 19.6148 11.7663L19.9357 11.8202C20.8397 11.972 21.5023 12.76 21.5023 13.6834L21.5019 14.1297C21.5019 16.1823 21.5019 17.2086 21.1915 18.0257C21.0115 18.4996 20.5366 19.1041 20.1569 19.5409C19.8284 19.9187 19.6272 20.3979 19.6272 20.9001V22M13.0657 11.6111V6.41665C13.0657 5.63426 12.4361 5 11.6596 5C10.883 5 10.2535 5.63426 10.2535 6.41665L10.2534 13.9367L8.73452 12.4016C8.06811 11.728 6.9704 11.7895 6.38166 12.5333C5.93118 13.1024 5.91873 13.9075 6.3514 14.4906L9.72568 18.8333C10.3713 19.6641 10.7221 20.9448 10.7221 22" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M13.4576 9.5C14.6847 8.81764 15.5153 7.50601 15.5153 6C15.5153 3.79086 13.7282 2 11.5237 2C9.31929 2 7.53223 3.79086 7.53223 6C7.53223 7.50601 8.36275 8.81764 9.58985 9.5" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
  <path d="M7.30436 6.02265H2.49805M2.49805 6.02265C2.49805 6.49277 3.01121 6.71697 3.33232 7.01135L4.50996 8.00993M2.49805 6.02265C2.49805 5.55252 3.01928 5.29858 3.33232 5.00137L4.50996 3.98999" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
