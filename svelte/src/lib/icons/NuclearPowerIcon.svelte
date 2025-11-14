<script lang="ts">
  import config from '../config';

  /**
   * @component NuclearPowerIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/nuclear-power)
   * @see {@link https://clicons.dev/icon/nuclear-power} - Icon preview
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
  <path d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M14.9111 8.43439L15.8552 6.65198C16.5358 5.36682 16.8762 4.72424 16.5862 4.02175C16.2963 3.31926 15.7303 3.16307 14.5984 2.8507C13.7693 2.62192 12.8984 2.5 12 2.5C11.1016 2.5 10.2307 2.62192 9.40163 2.8507C8.26967 3.16307 7.70368 3.31926 7.41376 4.02175C7.12384 4.72424 7.46418 5.36682 8.14485 6.65198L9.08888 8.43439M16.9973 12.6649H19.0632C20.5386 12.6649 21.2763 12.6649 21.73 13.3019C22.1838 13.9388 22.0038 14.5449 21.6438 15.7571C21.1143 17.5399 20.1389 19.1197 18.853 20.3559C17.9893 21.1862 17.5575 21.6013 16.8282 21.4789C16.0989 21.3565 15.7574 20.7117 15.0743 19.4221L13.8658 17.1403M10.1342 17.1403L8.92566 19.4221C8.24263 20.7117 7.90112 21.3565 7.17181 21.4789C6.44249 21.6013 6.01067 21.1862 5.14702 20.3559C3.86105 19.1197 2.88572 17.5399 2.35623 15.7571C1.99622 14.5449 1.81621 13.9388 2.26995 13.3019C2.72369 12.6649 3.46138 12.6649 4.93677 12.6649H7.00267" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
