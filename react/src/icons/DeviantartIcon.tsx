import React from 'react';
import config from '../config';

interface DeviantartIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DeviantartIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/deviantart)
 * @see {@link https://clicons.dev/icon/deviantart} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DeviantartIcon = React.forwardRef<SVGSVGElement, DeviantartIconProps>(
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

    const iconData = [["path", { d: "M18 2C18.8273 2 19 2.17267 19 3V6.13854C19 6.44216 18.9987 6.44633 18.8289 6.698L15.5528 11.5517C15.0898 12.2375 14.8584 12.5804 14.9994 12.8458C15.1404 13.1111 15.5541 13.1111 16.3816 13.1111H18C18.8273 13.1111 19 13.2838 19 14.1111V16.5556C19 17.3829 18.8273 17.5556 18 17.5556H12.5626C11.5215 17.5556 11.4872 17.5738 10.9048 18.4367L8.79735 21.5594C8.50616 21.9909 8.48899 22 7.96846 22H6C5.17267 22 5 21.8273 5 21V17.8615C5 17.5578 5.00128 17.5537 5.17114 17.302L8.44724 12.4483C8.91018 11.7625 9.14164 11.4196 9.00062 11.1542C8.85959 10.8889 8.44585 10.8889 7.61838 10.8889H6C5.17267 10.8889 5 10.7162 5 9.88889V7.44445C5 6.61711 5.17267 6.44444 6 6.44444H11.4374C12.4785 6.44444 12.5128 6.4262 13.0952 5.56326L15.2027 2.44059C15.4938 2.00912 15.511 2 16.0315 2H18Z", stroke: "currentColor", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

DeviantartIcon.displayName = 'DeviantartIcon';
export default DeviantartIcon;
