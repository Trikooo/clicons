import React from 'react';
import config from '../config';

interface GlobalEducationIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name GlobalEducationIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/global-education)
 * @see {@link https://clicons.dev/icon/global-education} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const GlobalEducationIcon = React.forwardRef<SVGSVGElement, GlobalEducationIconProps>(
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
      d: 'M4.49843 5.00004C3.19503 4.97812 2.56968 5.23496 2.22294 6.14258C2.01241 6.69367 2 7.29677 2 7.88676V18C2.10783 18.6348 2.28792 19.0559 2.74232 19.4001C3.48302 19.9611 4.46716 20.0378 5.38129 20.2033C7.3857 20.5663 9.12918 21.1811 11.9937 22M19.489 5.00004C20.0658 4.95075 20.4998 4.97733 20.8427 5.13087C22.2148 5.74518 21.9874 7.76209 21.9874 9.26623V17C21.9944 17.5973 21.9559 18.0619 21.8719 18.4323C21.5518 19.8431 19.7432 20.0199 18.3213 20.2822C16.5435 20.6101 14.6465 21.1794 11.9937 22M11.9937 22V15',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.9929 12C14.7526 12 16.9898 9.76142 16.9898 7C16.9898 4.23858 14.7526 2 11.9929 2M11.9929 12C9.23326 12 6.99609 9.76142 6.99609 7C6.99609 4.23858 9.23326 2 11.9929 2M11.9929 12C13.0969 12 13.9917 9.76142 13.9917 7C13.9917 4.23858 13.0969 2 11.9929 2M11.9929 12C10.889 12 9.99421 9.76142 9.99421 7C9.99421 4.23858 10.889 2 11.9929 2',
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

GlobalEducationIcon.displayName = 'GlobalEducationIcon';
export default GlobalEducationIcon;
