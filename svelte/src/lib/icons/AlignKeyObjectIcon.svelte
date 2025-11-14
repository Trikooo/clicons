<script lang="ts">
  import config from '../config';

  /**
   * @component AlignKeyObjectIcon
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](https://clicons.dev/icon/align-key-object)
   * @see {@link https://clicons.dev/icon/align-key-object} - Icon preview
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
  <path d="M20 5.98971V11.9771M18 3.9939H6M10 19.9604H6M4 17.9646V5.98971" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  <path d="M22 3.99386C22 5.09611 21.1046 5.98967 20 5.98967C18.8954 5.98967 18 5.09611 18 3.99386C18 2.8916 18.8954 1.99805 20 1.99805C21.1046 1.99805 22 2.8916 22 3.99386Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M6 3.99386C6 5.09611 5.10457 5.98967 4 5.98967C2.89543 5.98967 2 5.09611 2 3.99386C2 2.8916 2.89543 1.99805 4 1.99805C5.10457 1.99805 6 2.8916 6 3.99386Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M6 19.9604C6 21.0627 5.10457 21.9562 4 21.9562C2.89543 21.9562 2 21.0627 2 19.9604C2 18.8581 2.89543 17.9646 4 17.9646C5.10457 17.9646 6 18.8581 6 19.9604Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeWidth="1.5" />
  <path d="M15.5378 19.4119L17.9999 16.7963M17.9999 16.7963L19.4857 15.2075C19.668 15.0626 20.0617 14.8178 20.5935 15.3049C21.0741 15.7452 21.7048 16.4303 21.9883 16.7504M17.9999 16.7963L19.504 18.4327M15.9981 20.4863C15.9981 21.3231 15.3243 22.0014 14.4932 22.0014C13.6621 22.0014 12.9883 21.3231 12.9883 20.4863C12.9883 19.6495 13.6621 18.9712 14.4932 18.9712C15.3243 18.9712 15.9981 19.6495 15.9981 20.4863Z" stroke={"currentColor".replace('currentColor', finalColor)} strokeLinecap="round" strokeWidth="1.5" />
</svg>
