import React from 'react';
import config from '../config';

interface BorderLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BorderLeftIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/border-left)
 * @see {@link https://clicons.dev/icon/border-left} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BorderLeftIcon = React.forwardRef<SVGSVGElement, BorderLeftIconProps>(
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
      d: 'M6.5 2.5C5.40606 2.69854 4.60096 3.04969 3.96447 3.6708C2.5 5.09987 2.5 7.39991 2.5 12C2.5 16.6001 2.5 18.9001 3.96447 20.3292C4.60096 20.9503 5.40606 21.3015 6.5 21.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.6896 2.75143C18.7317 2.94471 19.4986 3.28657 20.105 3.89124C20.7113 4.49591 21.0541 5.26076 21.2479 6.3M10 2.50495C10.586 2.5 11.2883 2.5 11.9741 2.5C12.6599 2.5 13.4249 2.5 14.0109 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M21.2479 17.7C21.0541 18.7392 20.7113 19.5041 20.105 20.1088C19.4986 20.7134 18.7317 21.0553 17.6896 21.2486M10 21.495C10.586 21.5 11.2883 21.5 11.9741 21.5C12.6598 21.5 13.4249 21.5 14.0109 21.495',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V4M12 20V21.5M9 12H15M19.5312 12H21M12 9L12 15',
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

BorderLeftIcon.displayName = 'BorderLeftIcon';
export default BorderLeftIcon;
