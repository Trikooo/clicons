import React from 'react';
import config from '../config';

interface WorkoutBattleRopesIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WorkoutBattleRopesIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/workout-battle-ropes)
 * @see {@link https://clicons.dev/icon/workout-battle-ropes}
 */
const WorkoutBattleRopesIcon = React.forwardRef<SVGSVGElement, WorkoutBattleRopesIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.99488 4.49805C8.99488 5.32648 8.32291 5.99805 7.49401 5.99805C6.66509 5.99805 5.99313 5.32648 5.99313 4.49805C5.99313 3.66962 6.66509 2.99805 7.49401 2.99805C8.32291 2.99805 8.99488 3.66962 8.99488 4.49805Z'
    }
  ],
  [
    'path',
    {
      d: 'M20.0009 8.99805C19.4171 8.99805 18.8673 8.7275 18.517 8.26779L17.4896 6.91965C17.3534 6.74102 17.2853 6.65171 17.2191 6.58149C16.6494 5.97771 15.7394 5.8243 14.998 6.20706'
    }
  ],
  [
    'path',
    {
      d: 'M21.002 16.998C19.7158 16.998 18.4912 16.4454 17.6367 15.4796L16.9581 14.7125C15.9763 13.6027 14.6698 12.8554 13.2453 12.5639M10.8691 12.427C10.559 12.427 10.404 12.427 10.2603 12.4061C9.02013 12.2263 8.31461 10.808 7.49411 9.99805'
    }
  ],
  [
    'path',
    {
      d: 'M12.9991 6.97656L9.9047 8.38788L7.84413 8.25801M6.35904 21.0038V16.3656L6.17341 16.0317L5.18953 15.1226M5.18953 15.1226L3.37617 13.6789C3.13786 13.4891 2.99902 13.2011 2.99902 12.8965V12.8777L4.61406 8.57341L4.69037 8.46941C4.89663 8.18832 5.23439 8.03494 5.58178 8.06463L7.84413 8.25801M5.18953 15.1226L7.84413 8.25801'
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

WorkoutBattleRopesIcon.displayName = 'WorkoutBattleRopesIcon';
export default WorkoutBattleRopesIcon;
