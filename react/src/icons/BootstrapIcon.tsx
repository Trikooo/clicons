import React from 'react';
import config from '../config';

interface BootstrapIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BootstrapIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bootstrap)
 * @see {@link https://clicons.dev/icon/bootstrap} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BootstrapIcon = React.forwardRef<SVGSVGElement, BootstrapIconProps>(
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
      d: 'M12.8824 12C14.0519 12 15 12.8954 15 14C15 15.1046 14.0519 16 12.8824 16H10.6C9.84575 16 9.46863 16 9.23431 15.7657C9 15.5314 9 15.1542 9 14.4V12M12.8824 12C14.0519 12 15 11.1046 15 10C15 8.89543 14.0519 8 12.8824 8H10.6C9.84575 8 9.46863 8 9.23431 8.23431C9 8.46863 9 8.84575 9 9.6V12M12.8824 12H9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 12C20.8954 12 20 11.1046 20 10V8C20 4.69067 19.3093 4 16 4H8C4.69067 4 4 4.69067 4 8V10C4 11.1046 3.10457 12 2 12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 12C3.10457 12 4 12.8954 4 14L4 16C4 19.3093 4.69067 20 8 20H16C19.3093 20 20 19.3093 20 16V14C20 12.8954 20.8954 12 22 12',
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

BootstrapIcon.displayName = 'BootstrapIcon';
export default BootstrapIcon;
