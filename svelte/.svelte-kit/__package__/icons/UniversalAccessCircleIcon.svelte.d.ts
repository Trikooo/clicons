/**
 * @component UniversalAccessCircleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/universal-access-circle)
 * @see {@link https://clicons.dev/icon/universal-access-circle} - Icon preview
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
declare const UniversalAccessCircleIcon: import("svelte").Component<Props, {}, "">;
type UniversalAccessCircleIcon = ReturnType<typeof UniversalAccessCircleIcon>;
export default UniversalAccessCircleIcon;
