import React from 'react';
import config from '../config';

interface TableTennisBatIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TableTennisBatIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/table-tennis-bat)
 * @see {@link https://clicons.dev/icon/table-tennis-bat} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TableTennisBatIcon = React.forwardRef<SVGSVGElement, TableTennisBatIconProps>(
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

    const iconData = [["path", { d: "M6 8L16 18", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.48802 18.1868C4.27193 17.0655 6.999 15.3875 7.40038 13.6847C7.52522 13.1551 7.24468 12.6415 7.00243 12.1542C5.83072 9.79703 5.80432 7.05244 7.54627 5.31272C10.584 2.27886 17.1053 0.495103 20.307 3.69226C23.505 6.88574 21.7222 13.4012 18.6842 16.4348C16.942 18.1746 14.1945 18.149 11.8339 16.9787C11.3457 16.7368 10.8314 16.4565 10.3009 16.5812C8.59557 16.982 6.91469 19.7046 5.79184 21.4859C4.57177 23.4214 0.634453 19.3518 2.48802 18.1868Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

TableTennisBatIcon.displayName = 'TableTennisBatIcon';
export default TableTennisBatIcon;
