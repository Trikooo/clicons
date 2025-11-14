/**
 * @component CircleLockRemove2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/circle-lock-remove2)
 * @see {@link https://clicons.dev/icon/circle-lock-remove2} - Icon preview
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
declare const CircleLockRemove2Icon: import("svelte").Component<Props, {}, "">;
type CircleLockRemove2Icon = ReturnType<typeof CircleLockRemove2Icon>;
export default CircleLockRemove2Icon;
