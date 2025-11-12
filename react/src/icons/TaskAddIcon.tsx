import React from 'react';
import config from '../config';

interface TaskAddIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TaskAddIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/task-add)
 * @see {@link https://clicons.dev/icon/task-add} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TaskAddIcon = React.forwardRef<SVGSVGElement, TaskAddIconProps>(
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
      d: 'M13.498 2H8.49805C7.66962 2 6.99805 2.67157 6.99805 3.5C6.99805 4.32843 7.66962 5 8.49805 5H13.498C14.3265 5 14.998 4.32843 14.998 3.5C14.998 2.67157 14.3265 2 13.498 2Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.99805 15H10.4266M6.99805 11H14.998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.998 12.9995L18.9981 9.48263C18.9981 6.65424 18.9981 5.24004 18.1194 4.36137C17.4781 3.72007 16.5515 3.54681 14.9981 3.5M13.998 21.9995L8.99805 21.9995C6.16963 21.9995 4.75541 21.9995 3.87674 21.1208C2.99806 20.2421 2.99805 18.8279 2.99805 15.9995L2.99806 9.48269C2.99805 6.65425 2.99805 5.24004 3.87673 4.36136C4.51802 3.72007 5.44456 3.54681 6.99795 3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.998 19H17.998M17.998 19H14.998M17.998 19V22M17.998 19V16',
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

TaskAddIcon.displayName = 'TaskAddIcon';
export default TaskAddIcon;
