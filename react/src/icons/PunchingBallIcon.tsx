import React from 'react';
import config from '../config';

interface PunchingBallIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PunchingBallIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/punching-ball)
 * @see {@link https://clicons.dev/icon/punching-ball}
 */
const PunchingBallIcon = React.forwardRef<SVGSVGElement, PunchingBallIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.002 22C8.4121 22 5.50195 19.8177 5.50195 16.5095C5.50195 13.6609 7.9118 11.6468 9.27297 7.95509C9.4458 7.48634 9.53222 7.25196 9.59859 7.1298C9.95355 6.47644 10.4553 6.14521 11.2407 6.04564C11.7205 5.98482 12.2832 5.98478 12.7629 6.04554C13.5485 6.14503 14.0503 6.47626 14.4054 7.12968C14.4717 7.25185 14.5582 7.48626 14.731 7.95508C16.0922 11.6466 18.502 13.6606 18.502 16.5092C18.502 19.8174 15.5918 22 12.002 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.95495 14C8.93192 15.7778 9.65332 22 12.0009 22C14.3463 22 15.0741 15.7778 14.0487 14'
    }
  ],
  [
    'path',
    {
      d: 'M12 6V3.5M12 3.5L12.9153 3.27116C13.6038 3.09905 14.1826 2.63471 14.5 2M12 3.5L11.0847 3.27116C10.3962 3.09905 9.81735 2.63471 9.5 2'
    }
  ],
  [
    'path',
    {
      d: 'M15.002 9H9.00195'
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

PunchingBallIcon.displayName = 'PunchingBallIcon';
export default PunchingBallIcon;
