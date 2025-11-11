import React from 'react';
import config from '../config';

interface EthereumIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name EthereumIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ethereum)
 * @see {@link https://clicons.dev/icon/ethereum} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const EthereumIcon = React.forwardRef<SVGSVGElement, EthereumIconProps>(
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

    const iconData = [["path", { d: "M18.9999 11.9999L13.2403 14.5784C12.6288 14.8594 12.3231 14.9999 11.9999 14.9999C11.6768 14.9999 11.371 14.8594 10.7595 14.5784L4.99993 11.9999M18.9999 11.9999C18.9999 11.4677 18.6944 10.9997 18.0833 10.0635L14.5796 4.69604C13.4063 2.89864 12.8197 1.99994 11.9999 1.99994C11.1802 1.99994 10.5935 2.89864 9.42025 4.69605L5.91656 10.0635C5.30547 10.9997 4.99993 11.4677 4.99993 11.9999M18.9999 11.9999C18.9999 12.5322 18.6944 13.0002 18.0833 13.9364L14.5796 19.3038C13.4063 21.1012 12.8197 21.9999 11.9999 21.9999C11.1802 21.9999 10.5935 21.1012 9.42026 19.3038L5.91656 13.9364C5.30547 13.0002 4.99993 12.5322 4.99993 11.9999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

EthereumIcon.displayName = 'EthereumIcon';
export default EthereumIcon;
