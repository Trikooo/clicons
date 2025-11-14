/**
 * @component WifiDisconnected4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wifi-disconnected4)
 * @see {@link https://clicons.dev/icon/wifi-disconnected4} - Icon preview
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
declare const WifiDisconnected4Icon: import("svelte").Component<Props, {}, "">;
type WifiDisconnected4Icon = ReturnType<typeof WifiDisconnected4Icon>;
export default WifiDisconnected4Icon;
