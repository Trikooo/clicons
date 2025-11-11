import React from 'react';
import config from '../config';

interface IceCream01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name IceCream01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ice-cream01)
 * @see {@link https://clicons.dev/icon/ice-cream01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const IceCream01Icon = React.forwardRef<SVGSVGElement, IceCream01IconProps>(
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

    const iconData = [["path", { d: "M12 12.1534C14.4268 12.1534 16.7094 11.8086 18.6994 11.202C19.3273 11.0106 19.6412 10.9149 19.8479 11.0982C20.0546 11.2815 20.0152 11.5735 19.9363 12.1577C19.4239 15.9501 16.0416 19 12 19C7.95837 19 4.57608 15.9501 4.06374 12.1577C3.98483 11.5735 3.94537 11.2815 4.15209 11.0982C4.3588 10.9149 4.67272 11.0106 5.30056 11.202C7.29063 11.8086 9.57324 12.1534 12 12.1534Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 19V22H9H15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M7.08771 5C6.61656 6.46159 8.10425 7.61154 10.0967 7.22833C11.8214 6.89661 11.4094 7.44878 13.5462 7.89178C16.0476 8.41038 17 6.94879 17 5.97439", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M4.99561 9.02924C5.29529 7.27396 6.75091 3.89183 10.4969 2.9928", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M19.0229 9.00095C18.6978 7.501 17.2515 3.87646 13.54 3.01184", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

IceCream01Icon.displayName = 'IceCream01Icon';
export default IceCream01Icon;
