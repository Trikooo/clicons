import React from 'react';
import config from '../config';

interface CinnamonRollIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CinnamonRollIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cinnamon-roll)
 * @see {@link https://clicons.dev/icon/cinnamon-roll}
 */
const CinnamonRollIcon = React.forwardRef<SVGSVGElement, CinnamonRollIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 9C22 12.3137 17.5228 15 12 15C6.47715 15 2 12.3137 2 9C2 5.68629 6.47715 3 12 3C17.5228 3 22 5.68629 22 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 6.85441C15 5.44094 17 7.71729 17 8.7817C17 11.9514 7 11.7874 7 7.88187C7 5.49755 9 3 12 3'
    }
  ],
  [
    'path',
    {
      d: 'M22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9'
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

CinnamonRollIcon.displayName = 'CinnamonRollIcon';
export default CinnamonRollIcon;
