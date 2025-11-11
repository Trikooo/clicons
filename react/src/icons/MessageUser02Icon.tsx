import React from 'react';
import config from '../config';

interface MessageUser02IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageUser02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/message-user02)
 * @see {@link https://clicons.dev/icon/message-user02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MessageUser02Icon = React.forwardRef<SVGSVGElement, MessageUser02IconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [["path", { d: "M12.5212 3H11.5192C10.9563 3.00836 10.3958 3.03083 9.84518 3.06737C5.65374 3.34548 2.31504 6.72539 2.04032 10.9686C1.98656 11.7989 1.98656 12.6588 2.04032 13.4892C2.14038 15.0346 2.82509 16.4655 3.63119 17.6738C4.09923 18.5196 3.79035 19.5754 3.30283 20.4975C2.95132 21.1624 2.77557 21.4949 2.91669 21.735C3.0578 21.9752 3.37302 21.9829 4.00346 21.9982C5.25021 22.0285 6.09091 21.6757 6.75825 21.1845C7.13674 20.9059 7.32598 20.7666 7.45641 20.7506C7.58684 20.7346 7.84352 20.8401 8.3568 21.0511C8.81812 21.2408 9.35376 21.3578 9.84518 21.3904C11.2722 21.4851 12.7652 21.4853 14.1951 21.3904C18.2169 21.1236 21.5019 18.0009 22 14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.59 8.64819C14.9612 9.01675 13.3126 9.7693 14.3167 10.711C14.8072 11.171 15.3536 11.5 16.0404 11.5H19.9596C20.6464 11.5 21.1928 11.171 21.6833 10.711C22.6874 9.7693 21.0388 9.01675 20.41 8.64819C18.9355 7.78394 17.0645 7.78394 15.59 8.64819Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M20 4C20 5.10457 19.1046 6 18 6C16.8954 6 16 5.10457 16 4C16 2.89543 16.8954 2 18 2C19.1046 2 20 2.89543 20 4Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M11.9953 12.5H12.0043M7.99982 12.5H8.00879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "3" }]];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

MessageUser02Icon.displayName = 'MessageUser02Icon';
export default MessageUser02Icon;
