import React from 'react';
import config from '../config';

interface TissuePaperIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TissuePaperIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tissue-paper)
 * @see {@link https://clicons.dev/icon/tissue-paper}
 */
const TissuePaperIcon = React.forwardRef<SVGSVGElement, TissuePaperIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 9.5C10 12.5376 8.20914 15 6 15C3.79086 15 2 12.5376 2 9.5C2 6.46243 3.79086 4 6 4C8.20914 4 10 6.46243 10 9.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.8127 10.6943C21.9339 10.1652 22 9.59475 22 9C22 6.23858 20.5755 4 18.8182 4L6 4C9.15512 4 10.5704 7.955 10.0225 10.5666C9.45596 13.2674 7.17947 16.369 7.38872 19.1311C7.42593 19.6223 7.79914 20 8.24715 20H18.3605C18.8516 20 19.2378 19.5383 19.197 19C18.9931 16.3084 21.2125 13.3133 21.8127 10.6943Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.00801 9.5L5.99902 9.5'
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

TissuePaperIcon.displayName = 'TissuePaperIcon';
export default TissuePaperIcon;
