import React from 'react';
import config from '../config';

interface WorkflowSquare6IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WorkflowSquare6Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/workflow-square6)
 * @see {@link https://clicons.dev/icon/workflow-square6} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WorkflowSquare6Icon = React.forwardRef<SVGSVGElement, WorkflowSquare6IconProps>(
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
      d: 'M9 5C9 3.58579 9 2.87868 9.43934 2.43934C9.87868 2 10.5858 2 12 2C13.4142 2 14.1213 2 14.5607 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 14.5607 7.56066C14.1213 8 13.4142 8 12 8C10.5858 8 9.87868 8 9.43934 7.56066C9 7.12132 9 6.41421 9 5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12C16.5872 12 17.1308 12 17.5596 12.1522C18.1313 12.3552 18.5856 12.7446 18.8224 13.2346C19 13.6022 19 14.0681 19 15V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 12.1522C5.86867 12.3552 5.41443 12.7446 5.17761 13.2346C5 13.6022 5 14.0681 5 15V16',
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

WorkflowSquare6Icon.displayName = 'WorkflowSquare6Icon';
export default WorkflowSquare6Icon;
