import React from 'react';
import config from '../config';

interface JoinStraightIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name JoinStraightIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/join-straight)
 * @see {@link https://clicons.dev/icon/join-straight} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const JoinStraightIcon = React.forwardRef<SVGSVGElement, JoinStraightIconProps>(
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
      d: 'M8.00018 22.0002H18.0002C19.8858 22.0002 20.8286 22.0002 21.4144 21.4145C22.0002 20.8287 22.0002 19.8859 22.0002 18.0002V17.0002C22.0002 15.1146 22.0002 14.1718 21.4144 13.586C20.8286 13.0002 19.8858 13.0002 18.0002 13.0002L15.0002 13.0002C13.1146 13.0002 12.1718 13.0002 11.586 12.4145C11.0002 11.8287 11.0002 10.8859 11.0002 9.00024V6.00024C11.0002 4.11463 11.0002 3.17182 10.4144 2.58603C9.82861 2.00024 8.8858 2.00024 7.00018 2.00024L6.00018 2.00024C4.11456 2.00024 3.17176 2.00024 2.58597 2.58603C2.00018 3.17182 2.00018 4.11463 2.00018 6.00024L2.00018 16.0002C2.00018 18.8287 2.00018 20.2429 2.87886 21.1216C3.75754 22.0002 5.17176 22.0002 8.00018 22.0002Z',
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

JoinStraightIcon.displayName = 'JoinStraightIcon';
export default JoinStraightIcon;
