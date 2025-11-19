import React from 'react';
import config from '../config';

interface BorderBottomIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BorderBottomIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/border-bottom)
 * @see {@link https://clicons.dev/icon/border-bottom}
 */
const BorderBottomIcon = React.forwardRef<SVGSVGElement, BorderBottomIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 17.5C2.69854 18.594 3.04969 19.3991 3.6708 20.0356C5.09987 21.5 7.39991 21.5 12 21.5C16.6001 21.5 18.9001 21.5 20.3292 20.0356C20.9503 19.3991 21.3015 18.594 21.5 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.75143 6.31038C2.94471 5.26831 3.28657 4.50138 3.89124 3.89506C4.49591 3.28875 5.26076 2.94595 6.3 2.75214M2.50496 14C2.5 13.414 2.5 12.7117 2.5 12.0259C2.5 11.3401 2.5 10.5751 2.50496 9.98913M10.1 2.505C10.6844 2.50003 11.3161 2.50003 12 2.50003C12.6839 2.50003 13.3156 2.50003 13.9001 2.505M17.7 2.75214C18.7392 2.94595 19.5041 3.28874 20.1088 3.89506C20.7134 4.50138 21.0553 5.26831 21.2486 6.31038M21.495 14C21.5 13.414 21.5 12.7117 21.5 12.0259C21.5 11.3402 21.5 10.5751 21.495 9.98913'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 12L4 12M20 12L21.5 12M12 15L12 9.00003M12 4.46878L12 3.00003M9 12L15 12'
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

BorderBottomIcon.displayName = 'BorderBottomIcon';
export default BorderBottomIcon;
