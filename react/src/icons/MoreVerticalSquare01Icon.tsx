import React from 'react';
import config from '../config';

interface MoreVerticalSquare01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoreVerticalSquare01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/more-vertical-square01)
 * @see {@link https://clicons.dev/icon/more-vertical-square01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoreVerticalSquare01Icon = React.forwardRef<SVGSVGElement, MoreVerticalSquare01IconProps>(
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
    'rect',
    {
      x: '10.5',
      y: '3',
      width: '3',
      height: '3',
      rx: '1',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'rect',
    {
      x: '10.5',
      y: '10.5',
      width: '3',
      height: '3',
      rx: '1',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'rect',
    {
      x: '10.5',
      y: '18',
      width: '3',
      height: '3',
      rx: '1',
      stroke: 'currentColor',
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

MoreVerticalSquare01Icon.displayName = 'MoreVerticalSquare01Icon';
export default MoreVerticalSquare01Icon;
