import React from 'react';
import config from '../config';

interface HandPointingLeft04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingLeft04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-left04)
 * @see {@link https://clicons.dev/icon/hand-pointing-left04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingLeft04Icon = React.forwardRef<SVGSVGElement, HandPointingLeft04IconProps>(
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
      d: 'M10.515 10.7553L7.51076 10.7553M7.51076 10.7553H4.00456C3.17361 10.7553 2.5 10.083 2.5 9.25355C2.5 8.42415 3.17361 7.75178 4.00456 7.75178L9.469 7.75178M7.51076 10.7553L7.53762 11.8097C7.55574 12.5207 7.94402 13.1373 8.5156 13.4776M9.469 7.75178L14.0319 7.75178M9.469 7.75178L12.2288 5.15834C14.0964 3.58588 15.4578 4.4122 16.2142 4.99245L18.6516 6.60732C20.7191 7.83214 21.5 9.2495 21.5 10.4418V15.3225C21.5 17.5886 19.1177 19.7016 16.9342 19.7016L11.7343 19.7497C10.7241 19.759 9.865 19.0163 9.73 18.017L9.54069 16.4766M10.5448 13.7589H9.54069C9.16648 13.7589 8.81576 13.6563 8.5156 13.4776M8.5156 13.4776L8.5703 14.8132C8.59792 15.8977 9.48658 16.7624 10.5734 16.7624H11.5774',
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

HandPointingLeft04Icon.displayName = 'HandPointingLeft04Icon';
export default HandPointingLeft04Icon;
