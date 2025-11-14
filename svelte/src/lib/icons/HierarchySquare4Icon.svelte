<script lang="ts">
  import config from '../config';

  /**
   * @component HierarchySquare4Icon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/hierarchy-square4)
   * @see {@link https://clicons.dev/icon/hierarchy-square4} - Icon preview
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
  <path d="M9 12C9 10.5858 9 9.87868 8.48744 9.43934C7.97487 9 7.14992 9 5.5 9C3.85008 9 3.02513 9 2.51256 9.43934C2 9.87868 2 10.5858 2 12C2 13.4142 2 14.1213 2.51256 14.5607C3.02513 15 3.85008 15 5.5 15C7.14992 15 7.97487 15 8.48744 14.5607C9 14.1213 9 13.4142 9 12Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M22 5C22 3.58579 22 2.87868 21.5899 2.43934C21.1799 2 20.5199 2 19.2 2H17.8C16.4801 2 15.8201 2 15.4101 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 15.4101 7.56066C15.8201 8 16.4801 8 17.8 8H19.2C20.5199 8 21.1799 8 21.5899 7.56066C22 7.12132 22 6.41421 22 5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M22 19C22 17.5858 22 16.8787 21.5899 16.4393C21.1799 16 20.5199 16 19.2 16H17.8C16.4801 16 15.8201 16 15.4101 16.4393C15 16.8787 15 17.5858 15 19C15 20.4142 15 21.1213 15.4101 21.5607C15.8201 22 16.4801 22 17.8 22H19.2C20.5199 22 21.1799 22 21.5899 21.5607C22 21.1213 22 20.4142 22 19Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M12 11.999L12 16.0462C12 17.9201 12.9172 18.7615 15 19M12 11.999L12 7.95192C12 6.18453 12.779 5.25846 15 5M12 11.999L9 11.999" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
