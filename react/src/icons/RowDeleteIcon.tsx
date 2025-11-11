import React from 'react';
import config from '../config';

interface RowDeleteIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RowDeleteIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/row-delete)
 * @see {@link https://clicons.dev/icon/row-delete} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RowDeleteIcon = React.forwardRef<SVGSVGElement, RowDeleteIconProps>(
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

    const iconData = [["path", { d: "M21 18.5C21 19.9045 21 20.6067 20.6208 21.1111C20.4567 21.3295 20.2457 21.517 20 21.6629C19.4325 22 18.6425 22 17.0625 22L6.9375 22C5.35748 22 4.56747 22 3.99997 21.6629C3.75429 21.517 3.54335 21.3295 3.37919 21.1111C3 20.6067 3 19.9045 3 18.5C3 17.0955 3 16.3933 3.37919 15.8889C3.54335 15.6705 3.75429 15.483 3.99997 15.3371C4.56747 15 5.35748 15 6.9375 15L17.0625 15C18.6425 15 19.4325 15 20 15.3371C20.2457 15.483 20.4567 15.6705 20.6208 15.8889C21 16.3933 21 17.0955 21 18.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.0625 4L6.9375 4C5.35748 4 4.56747 4 3.99997 4.33706C3.75429 4.48298 3.54335 4.67048 3.37919 4.88886C3 5.39331 3 6.09554 3 7.5C3 8.90446 3 9.60669 3.37919 10.1111C3.54335 10.3295 3.75429 10.517 3.99997 10.6629C4.56747 11 5.35748 11 6.9375 11L17.0625 11C18.6425 11 19.4325 11 20 10.6629", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 7.99936L15 2M21 2.00064L15 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

RowDeleteIcon.displayName = 'RowDeleteIcon';
export default RowDeleteIcon;
