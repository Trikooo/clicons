/**
 * @component PeerToPeer2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/peer-to-peer2)
 * @see {@link https://clicons.dev/icon/peer-to-peer2} - Icon preview
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
declare const PeerToPeer2Icon: import("svelte").Component<Props, {}, "">;
type PeerToPeer2Icon = ReturnType<typeof PeerToPeer2Icon>;
export default PeerToPeer2Icon;
