/**
 * @component LocationUser2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/location-user2)
 * @see {@link https://clicons.dev/icon/location-user2} - Icon preview
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
declare const LocationUser2Icon: import("svelte").Component<Props, {}, "">;
type LocationUser2Icon = ReturnType<typeof LocationUser2Icon>;
export default LocationUser2Icon;
