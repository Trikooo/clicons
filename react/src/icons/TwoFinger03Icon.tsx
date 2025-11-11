import React from 'react';
import config from '../config';

interface TwoFinger03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TwoFinger03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/two-finger03)
 * @see {@link https://clicons.dev/icon/two-finger03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TwoFinger03Icon = React.forwardRef<SVGSVGElement, TwoFinger03IconProps>(
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

    const iconData = [["path", { d: "M11.5 6C11.5 5.17157 10.8284 4.5 10 4.5C9.17157 4.5 8.5 5.17157 8.5 6V13.9623L6.8797 12.3369C6.16877 11.6237 4.99772 11.6888 4.36965 12.4763C3.88907 13.0789 3.8758 13.9314 4.33738 14.5487L7.34137 18.5667C8.02311 19.4785 8.36398 19.9344 8.77419 20.2888C9.40001 20.8294 10.1499 21.2056 10.9566 21.3834C11.4853 21.5 12.0534 21.5 13.1896 21.5C15.3562 21.5 16.4395 21.5 17.3019 21.1679C18.6207 20.6601 19.6627 19.6148 20.1689 18.2918C20.5 17.4267 20.5 16.34 20.5 14.1667V11.5C20.5 10.3954 19.6046 9.5 18.5 9.5C17.9477 9.5 17.5 9.94772 17.5 10.5M11.5 6V4C11.5 3.17157 12.1716 2.5 13 2.5C13.8284 2.5 14.5 3.17157 14.5 4V9M11.5 6V10.5M14.5 9V10.5M14.5 9L15.0777 8.71115C15.3554 8.57229 15.666 8.48266 15.9679 8.55504C16.8468 8.76572 17.5 9.55657 17.5 10.5M17.5 10.5V11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

TwoFinger03Icon.displayName = 'TwoFinger03Icon';
export default TwoFinger03Icon;
