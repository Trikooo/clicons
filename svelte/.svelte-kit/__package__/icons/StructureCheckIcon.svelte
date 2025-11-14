<script lang="ts">
  import config from '../config';

  /**
   * @component StructureCheckIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/structure-check)
   * @see {@link https://clicons.dev/icon/structure-check} - Icon preview
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
  <path d="M15.0216 5C15.0216 3.58579 15.0216 2.87868 15.5328 2.43934C16.0439 2 16.8666 2 18.512 2C20.1573 2 20.98 2 21.4911 2.43934C22.0023 2.87868 22.0023 3.58579 22.0023 5C22.0023 6.41421 22.0023 7.12132 21.4911 7.56066C20.98 8 20.1573 8 18.512 8C16.8666 8 16.0439 8 15.5328 7.56066C15.0216 7.12132 15.0216 6.41421 15.0216 5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M15.0216 19C15.0216 17.5858 15.0216 16.8787 15.5328 16.4393C16.0439 16 16.8666 16 18.512 16C20.1573 16 20.98 16 21.4911 16.4393C22.0023 16.8787 22.0023 17.5858 22.0023 19C22.0023 20.4142 22.0023 21.1213 21.4911 21.5607C20.98 22 20.1573 22 18.512 22C16.8666 22 16.0439 22 15.5328 21.5607C15.0216 21.1213 15.0216 20.4142 15.0216 19Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M7.05513 17.0431C9.82526 17.0431 12.0297 14.7826 12.0297 12.0048C12.0297 9.22706 9.78405 6.97522 7.01393 6.97522M7.05513 17.0431C4.28501 17.0431 1.99818 14.7826 1.99818 12.0048C1.99818 9.22706 4.24381 6.97522 7.01393 6.97522M7.05513 17.0431C6.98536 19.1729 8.5445 19.9505 9.6547 19.9912H12.0297M7.01393 6.97522C6.94344 4.81515 8.52973 4.05555 9.65471 4.00781H12.0404" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M8.70927 10.8789L6.63787 13.0461C6.55977 13.1279 6.42966 13.1284 6.35094 13.0472L5.37904 12.0458" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
