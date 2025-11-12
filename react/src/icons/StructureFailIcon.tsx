import React from 'react';
import config from '../config';

interface StructureFailIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name StructureFailIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/structure-fail)
 * @see {@link https://clicons.dev/icon/structure-fail} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const StructureFailIcon = React.forwardRef<SVGSVGElement, StructureFailIconProps>(
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
      d: 'M15.0157 5C15.0157 3.58579 15.0157 2.87868 15.5273 2.43934C16.0388 2 16.8622 2 18.509 2C20.1557 2 20.9791 2 21.4906 2.43934C22.0022 2.87868 22.0022 3.58579 22.0022 5C22.0022 6.41421 22.0022 7.12132 21.4906 7.56066C20.9791 8 20.1557 8 18.509 8C16.8622 8 16.0388 8 15.5273 7.56066C15.0157 7.12132 15.0157 6.41421 15.0157 5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.0157 19C15.0157 17.5858 15.0157 16.8787 15.5273 16.4393C16.0388 16 16.8622 16 18.509 16C20.1557 16 20.9791 16 21.4906 16.4393C22.0022 16.8787 22.0022 17.5858 22.0022 19C22.0022 20.4142 22.0022 21.1213 21.4906 21.5607C20.9791 22 20.1557 22 18.509 22C16.8622 22 16.0388 22 15.5273 21.5607C15.0157 21.1213 15.0157 20.4142 15.0157 19Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5412 10.4825L5.52337 13.4949M8.5412 13.4949L5.52337 10.4825',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.04533 17.0314C9.8101 17.0314 12.0103 14.7709 12.0103 11.9931C12.0103 9.21534 9.76898 6.9635 7.0042 6.9635M7.04533 17.0314C4.28055 17.0314 1.99813 14.7709 1.99813 11.9931C1.99813 9.21534 4.23943 6.9635 7.0042 6.9635M7.04533 17.0314C6.97569 19.1612 8.53182 19.9388 9.63988 19.9795H12.0103M7.0042 6.9635C6.93385 4.80343 8.51708 4.04384 9.63988 3.99609H12.021',
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

StructureFailIcon.displayName = 'StructureFailIcon';
export default StructureFailIcon;
