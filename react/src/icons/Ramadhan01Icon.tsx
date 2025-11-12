import React from 'react';
import config from '../config';

interface Ramadhan01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Ramadhan01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ramadhan01)
 * @see {@link https://clicons.dev/icon/ramadhan01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Ramadhan01Icon = React.forwardRef<SVGSVGElement, Ramadhan01IconProps>(
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
      d: 'M18.6911 3.07767L19.395 4.49715C19.491 4.69475 19.7469 4.88428 19.9629 4.92057L21.2388 5.1343C22.0547 5.27141 22.2467 5.86824 21.6587 6.457L20.6668 7.45709C20.4989 7.62646 20.4069 7.9531 20.4589 8.18699L20.7428 9.425C20.9668 10.4049 20.4509 10.784 19.591 10.2718L18.3951 9.55808C18.1791 9.42903 17.8232 9.42903 17.6032 9.55808L16.4073 10.2718C15.5514 10.784 15.0315 10.4009 15.2554 9.425L15.5394 8.18699C15.5914 7.9531 15.4994 7.62646 15.3314 7.45709L14.3395 6.457C13.7556 5.86824 13.9436 5.27141 14.7595 5.1343L16.0353 4.92057C16.2473 4.88428 16.5033 4.69475 16.5993 4.49715L17.3032 3.07767C17.6872 2.30744 18.3111 2.30744 18.6911 3.07767Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 11.8049C3 17.1594 7.34065 21.5 12.6951 21.5C17.101 21.5 20.8204 18.5611 22 14.5367C20.5791 15.5691 18.8306 16.1779 16.94 16.1779C12.1804 16.1779 8.32208 12.3196 8.32208 7.56005C8.32208 5.66937 8.93094 3.9209 9.96326 2.5C5.9389 3.67959 3 7.39904 3 11.8049Z',
      stroke: 'currentColor',
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

Ramadhan01Icon.displayName = 'Ramadhan01Icon';
export default Ramadhan01Icon;
