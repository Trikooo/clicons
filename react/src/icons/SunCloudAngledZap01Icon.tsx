import React from 'react';
import config from '../config';

interface SunCloudAngledZap01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SunCloudAngledZap01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-angled-zap01)
 * @see {@link https://clicons.dev/icon/sun-cloud-angled-zap01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SunCloudAngledZap01Icon = React.forwardRef<SVGSVGElement, SunCloudAngledZap01IconProps>(
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

    const iconData = [["path", { d: "M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 18.5C4.23858 18.5 2 16.336 2 13.6667C2 11.1537 3.98398 9.0886 6.52042 8.85528M17.5 18.5C19.9853 18.5 22 16.5524 22 14.15C22 11.7476 19.9853 9.8 17.5 9.8C17.4925 9.8 17.485 9.80002 17.4776 9.80005M17.4776 9.80005C17.4924 9.64084 17.5 9.47961 17.5 9.31667C17.5 6.38035 15.0376 4 12 4C9.12324 4 6.76233 6.135 6.52042 8.85528M17.4776 9.80005C17.3753 10.8967 16.9286 11.8973 16.2428 12.7M6.52042 8.85528C6.67826 8.84076 6.83823 8.83333 7 8.83333C8.12582 8.83333 9.16474 9.19302 10.0005 9.8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

SunCloudAngledZap01Icon.displayName = 'SunCloudAngledZap01Icon';
export default SunCloudAngledZap01Icon;
