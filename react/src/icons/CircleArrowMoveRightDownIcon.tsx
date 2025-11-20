import React from 'react';
import config from '../config';

interface CircleArrowMoveRightDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CircleArrowMoveRightDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/circle-arrow-move-right-down)
 * @see {@link https://clicons.dev/icon/circle-arrow-move-right-down}
 */
const CircleArrowMoveRightDownIcon = React.forwardRef<SVGSVGElement, CircleArrowMoveRightDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.4921 11.6432C15.0223 11.0313 16.0939 10.1644 15.9847 9.80468M15.9847 9.80468C15.9847 9.38566 14.9336 8.5866 14.4921 8.00073M15.9847 9.80468C14.0658 9.92668 11.5926 9.5516 10.5852 10.351C9.52468 11.2381 9.91163 13.7606 9.80534 15.9933M9.80534 15.9933C10.3405 16.0402 11.0315 15.0081 11.6398 14.4738M9.80534 15.9933C9.44987 16.0909 8.54077 14.9856 8.00781 14.4762'
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

CircleArrowMoveRightDownIcon.displayName = 'CircleArrowMoveRightDownIcon';
export default CircleArrowMoveRightDownIcon;
