import React from 'react';
import config from '../config';

interface Xsl2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Xsl2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/xsl2)
 * @see {@link https://clicons.dev/icon/xsl2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Xsl2Icon = React.forwardRef<SVGSVGElement, Xsl2IconProps>(
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
      d: 'M19.5 11C19.5 10.1825 19.5 9.4306 19.3478 9.06306C19.1955 8.69552 18.9065 8.40649 18.3284 7.82843L13.5919 3.09188C13.093 2.593 12.8436 2.34355 12.5345 2.19575C12.4702 2.165 12.4044 2.13772 12.3372 2.11401C12.0141 2 11.6614 2 10.9558 2C7.71082 2 6.08831 2 4.98933 2.88607C4.76731 3.06508 4.56508 3.26731 4.38607 3.48933C3.5 4.58831 3.5 6.21082 3.5 9.45584V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H19.5M12.5 2.5V3C12.5 5.82843 12.5 7.24264 13.3787 8.12132C14.2574 9 15.6716 9 18.5 9H19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 13.9998V16.9998C18.5 17.9426 18.5 18.414 18.7929 18.7069C19.0858 18.9998 19.5572 18.9998 20.5 18.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 14L9.5 16.5M9.5 16.5L11 19M9.5 16.5L11 14M9.5 16.5L8 19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 14H14.5C13.9477 14 13.5 14.4477 13.5 15V15.5C13.5 16.0523 13.9477 16.5 14.5 16.5H15C15.5523 16.5 16 16.9477 16 17.5V18C16 18.5523 15.5523 19 15 19H13.5',
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

Xsl2Icon.displayName = 'Xsl2Icon';
export default Xsl2Icon;
