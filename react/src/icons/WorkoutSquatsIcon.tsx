import React from 'react';
import config from '../config';

interface WorkoutSquatsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkoutSquatsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workout-squats)
 * @see {@link https://clicons.dev/icon/workout-squats}
 */
const WorkoutSquatsIcon = React.forwardRef<SVGSVGElement, WorkoutSquatsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 4.5C13 5.32843 12.3284 6 11.5 6C10.6716 6 10 5.32843 10 4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329M18 8.34546L16.2639 9.34233C15.3862 9.84631 14.9473 10.0983 14.4623 10.1209C13.9774 10.1434 13.5172 9.93325 12.5969 9.5129L11.8137 9.15516M8.9329 14.9258H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516M8.9329 14.9258C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516'
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

WorkoutSquatsIcon.displayName = 'WorkoutSquatsIcon';
export default WorkoutSquatsIcon;
