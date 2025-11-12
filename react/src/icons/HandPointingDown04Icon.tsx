import React from 'react';
import config from '../config';

interface HandPointingDown04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingDown04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-down04)
 * @see {@link https://clicons.dev/icon/hand-pointing-down04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingDown04Icon = React.forwardRef<SVGSVGElement, HandPointingDown04IconProps>(
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
      d: 'M10.7554 13.485V19.9954C10.7554 20.8264 10.083 21.5 9.25361 21.5C8.42421 21.5 7.75184 20.8264 7.75184 19.9954V9.96807M10.7554 16.4892L11.8098 16.4624C12.8942 16.4347 13.7589 15.5461 13.7589 14.4593V13.4552M13.4777 15.4844L14.8133 15.4297C15.8977 15.4021 16.7625 14.5134 16.7625 13.4266V12.4226M16.4767 14.4593L18.0171 14.27C19.0164 14.135 19.7591 13.2759 19.7497 12.2657L19.7017 7.06579C19.7017 4.88227 17.5886 2.5 15.3226 2.5H10.4418C9.24956 2.5 7.8322 3.28085 6.60739 5.34841L4.99251 7.78577C4.41226 8.54219 3.58594 9.90362 5.1584 11.7712L7.75184 14.531',
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

HandPointingDown04Icon.displayName = 'HandPointingDown04Icon';
export default HandPointingDown04Icon;
