import React from 'react';
import config from '../config';

interface SleevelessIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SleevelessIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sleeveless)
 * @see {@link https://clicons.dev/icon/sleeveless}
 */
const SleevelessIcon = React.forwardRef<SVGSVGElement, SleevelessIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 7.31544C13.6569 7.31544 15 5.20251 15 2C16.1024 2.42616 17.4582 2.40398 17.4054 3.76407C17.353 5.11247 17.7915 6.82713 19.1673 8.11699C19.789 8.6999 20 8.96542 20 9.79955V16.4966C20 18.7746 20 19.9135 19.2678 20.6212C17.1917 22.6276 6.45239 22.2836 4.73223 20.6212C4 19.9135 4 18.7746 4 16.4966V9.79955C4 8.96542 4.211 8.6999 4.83274 8.11699C6.20853 6.82713 6.647 5.11247 6.59461 3.76407C6.54178 2.40398 7.89761 2.42616 9 2C9 5.20251 10.3431 7.31544 12 7.31544Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 2C14.2005 2.62236 13.1502 3 12 3C10.8498 3 9.79952 2.62236 9 2'
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

SleevelessIcon.displayName = 'SleevelessIcon';
export default SleevelessIcon;
