import React from 'react';
import config from '../config';

interface DragRight01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DragRight01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/drag-right01)
 * @see {@link https://clicons.dev/icon/drag-right01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DragRight01Icon = React.forwardRef<SVGSVGElement, DragRight01IconProps>(
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
      d: 'M8.66725 8.48697C7.6477 7.87575 6.96582 6.76359 6.96582 5.49298C6.96582 3.56386 8.53764 2 10.4766 2C12.4155 2 13.9874 3.56386 13.9874 5.49298C13.9874 6.76359 13.3055 7.87575 12.2859 8.48697',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.0118 2.99023L19.7588 4.43095C20.0144 4.70291 20.0571 4.90799 19.9311 5.20934C19.8854 5.31849 19.8078 5.41067 19.7191 5.48911L18.0118 6.99909M14.4141 4.97515H18.8302',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5598 21.9322L8.58528 21.3026C8.6102 20.6871 8.44792 20.0747 8.10427 19.56C6.75224 17.5352 5.71906 16.382 4.30307 14.407C4.19092 14.2505 4.08602 14.0849 4.04183 13.898C3.70037 12.4547 5.46469 10.5763 7.09891 12.7397L8.69426 14.3703L8.69426 6.33819C8.90581 4.69236 11.5052 4.36589 11.9435 6.33817L11.9435 10.0762C13.5649 9.9291 20.1184 11.0532 18.8815 15.5352C18.8235 15.7452 18.7681 15.9597 18.7109 16.17C18.5026 16.9358 17.9931 18.0539 17.5025 19.007C16.9569 20.0667 17.1005 21.5638 17.0081 21.9984',
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

DragRight01Icon.displayName = 'DragRight01Icon';
export default DragRight01Icon;
