import React from 'react';
import config from '../config';

interface WorkoutGymnasticsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkoutGymnasticsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workout-gymnastics)
 * @see {@link https://clicons.dev/icon/workout-gymnastics}
 */
const WorkoutGymnasticsIcon = React.forwardRef<SVGSVGElement, WorkoutGymnasticsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.99639 9.5013C6.99639 10.3272 6.32519 10.9967 5.49722 10.9967C4.66925 10.9967 3.99805 10.3272 3.99805 9.5013C3.99805 8.67539 4.66925 8.00586 5.49722 8.00586C6.32519 8.00586 6.99639 8.67539 6.99639 9.5013Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.96586 3L9.82439 8.77139C9.85322 8.96518 9.86769 9.16082 9.86769 9.35673V9.4375C9.86769 9.64662 9.84571 9.85516 9.80209 10.0597L9.75228 10.2933C9.73524 10.3732 9.70843 10.4507 9.67245 10.5241L6.99197 15.989M10.4242 8.75435L15.9422 11.0591L16.5007 11.3014C16.8389 11.4481 17.0967 11.7338 17.2076 12.0846L20.002 20.999M9.5094 11.9597L14.6342 13.9708M14.6342 13.9708L12.0185 20.8732M14.6342 13.9708L16.8165 11.806'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

WorkoutGymnasticsIcon.displayName = 'WorkoutGymnasticsIcon';
export default WorkoutGymnasticsIcon;
