/**
 * @component SimcardDualIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/simcard-dual)
 * @see {@link https://clicons.dev/icon/simcard-dual} - Icon preview
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
declare const SimcardDualIcon: import("svelte").Component<Props, {}, "">;
type SimcardDualIcon = ReturnType<typeof SimcardDualIcon>;
export default SimcardDualIcon;
