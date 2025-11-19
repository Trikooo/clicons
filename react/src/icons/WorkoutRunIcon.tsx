import React from 'react';
import config from '../config';

interface WorkoutRunIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkoutRunIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workout-run)
 * @see {@link https://clicons.dev/icon/workout-run}
 */
const WorkoutRunIcon = React.forwardRef<SVGSVGElement, WorkoutRunIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 21.0008L14.3359 18.3848C14.1161 17.5191 13.6615 16.7284 13.0207 16.0974L11.5 14.5998M6 11.1534C7 9.18366 8.53767 8.0423 12 8.00136M12 8.00136C12.2186 7.99877 12.5444 7.99799 12.8698 7.99805C13.3747 7.99813 13.6271 7.99818 13.8282 8.09214C14.0293 8.18609 14.2356 8.43256 14.6482 8.92548C14.7664 9.06672 14.8878 9.19326 15 9.27743M12 8.00136L10.7309 9.95956C10.0332 11.0362 9.68429 11.5745 9.67069 12.1397C9.66463 12.3914 9.70617 12.642 9.79313 12.8784C9.98834 13.409 10.4922 13.8059 11.5 14.5998M15 9.27743C16.1547 10.1433 17.9627 10.4921 20 8.19913M15 9.27743L11.5 14.5998'
    }
  ],
  [
    'path',
    {
      d: 'M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16'
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

WorkoutRunIcon.displayName = 'WorkoutRunIcon';
export default WorkoutRunIcon;
