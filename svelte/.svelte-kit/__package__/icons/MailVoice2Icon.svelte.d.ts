/**
 * @component MailVoice2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mail-voice2)
 * @see {@link https://clicons.dev/icon/mail-voice2} - Icon preview
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
declare const MailVoice2Icon: import("svelte").Component<Props, {}, "">;
type MailVoice2Icon = ReturnType<typeof MailVoice2Icon>;
export default MailVoice2Icon;
