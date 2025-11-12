import React from 'react';
import config from '../config';

interface AlignTopIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AlignTopIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/align-top)
 * @see {@link https://clicons.dev/icon/align-top} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AlignTopIcon = React.forwardRef<SVGSVGElement, AlignTopIconProps>(
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
      d: 'M16.502 7.99988C17.3458 7.99988 18.3198 7.9165 18.801 8.74988C19.002 9.09795 19.002 9.56526 19.002 10.4999V11.4999C19.002 12.4345 19.002 12.9018 18.801 13.2499C18.3198 14.0832 17.3458 13.9999 16.502 13.9999C15.6581 13.9999 14.6841 14.0832 14.2029 13.2499C14.002 12.9018 14.002 12.4345 14.002 11.4999L14.002 10.4999C14.002 9.56526 14.002 9.09795 14.2029 8.74988C14.6841 7.9165 15.6581 7.99988 16.502 7.99988Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.50195 7.99988C8.34585 7.99988 9.31984 7.9165 9.80099 8.74988C10.002 9.09795 10.002 9.56526 10.002 10.4999L10.002 17.4999C10.002 18.4345 10.002 18.9018 9.80099 19.2499C9.31984 20.0832 8.34585 19.9999 7.50195 19.9999C6.65806 19.9999 5.68406 20.0832 5.20292 19.2499C5.00195 18.9018 5.00195 18.4345 5.00195 17.4999L5.00195 10.4999C5.00195 9.56526 5.00195 9.09795 5.20292 8.74988C5.68406 7.9165 6.65806 7.99988 7.50195 7.99988Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 4L2 4',
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

AlignTopIcon.displayName = 'AlignTopIcon';
export default AlignTopIcon;
