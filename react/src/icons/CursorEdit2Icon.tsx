import React from 'react';
import config from '../config';

interface CursorEdit2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CursorEdit2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cursor-edit2)
 * @see {@link https://clicons.dev/icon/cursor-edit2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CursorEdit2Icon = React.forwardRef<SVGSVGElement, CursorEdit2IconProps>(
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

    const iconData = [
  [
    'path',
    {
      d: 'M12.791 8.76757L17.4838 10.6039C20.1905 11.663 21.5438 12.1926 21.4989 13.0326C21.454 13.8726 20.0417 14.2578 17.217 15.0282C16.3759 15.2576 15.9554 15.3722 15.6638 15.6638C15.3722 15.9554 15.2576 16.3759 15.0282 17.217C14.2578 20.0417 13.8726 21.454 13.0326 21.4989C12.1926 21.5438 11.663 20.1905 10.6039 17.4838L8.76757 12.791C7.6587 9.95727 7.10427 8.54038 7.82233 7.82233C8.54038 7.10427 9.95727 7.6587 12.791 8.76757Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5V4.5C2.5 5.05228 2.94772 5.5 3.5 5.5H4.5C5.05228 5.5 5.5 5.05228 5.5 4.5V3.5C5.5 2.94772 5.05228 2.5 4.5 2.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 13.5H3.5C2.94772 13.5 2.5 13.9477 2.5 14.5V15.5C2.5 16.0523 2.94772 16.5 3.5 16.5H4.5C5.05228 16.5 5.5 16.0523 5.5 15.5V14.5C5.5 13.9477 5.05228 13.5 4.5 13.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 2.5H14.5C13.9477 2.5 13.5 2.94772 13.5 3.5V4.5C13.5 5.05228 13.9477 5.5 14.5 5.5H15.5C16.0523 5.5 16.5 5.05228 16.5 4.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 4H5.5M4 5.5V13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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

CursorEdit2Icon.displayName = 'CursorEdit2Icon';
export default CursorEdit2Icon;
