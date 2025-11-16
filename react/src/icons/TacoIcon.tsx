import React from 'react';
import config from '../config';

interface TacoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TacoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/taco)
 * @see {@link https://clicons.dev/icon/taco}
 */
const TacoIcon = React.forwardRef<SVGSVGElement, TacoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 9C7.67909 9 3.98995 11.9368 2.53353 16.0723C2.00628 17.5695 1.74265 18.318 2.34852 19.159C2.95439 20 3.94331 20 5.92117 20H18.0788C20.0567 20 21.0456 20 21.6515 19.159C22.2573 18.318 21.9937 17.5695 21.4665 16.0723C20.0101 11.9368 16.3209 9 12 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.3292 15C22.2972 13.7279 22.2176 11.9699 21.0901 10.7778C20.5725 10.2305 20.2571 9.53455 20.1924 8.80334C20.0438 7.12573 18.626 5.78671 16.8478 5.65884L16.6438 5.64417C15.8567 5.58757 15.1028 5.30226 14.4905 4.83203C13.0458 3.72266 10.9542 3.72266 9.50953 4.83203C8.89717 5.30226 8.14332 5.58757 7.35624 5.64417L7.15218 5.65884C5.37401 5.78671 3.95622 7.12573 3.80765 8.80334C3.74289 9.53455 3.42752 10.2305 2.90986 10.7778C1.78245 11.9699 1.70277 13.7279 2.67083 15'
    }
  ],
  [
    'path',
    {
      d: 'M16.0078 14L15.9988 14'
    }
  ],
  [
    'path',
    {
      d: 'M13.0078 16L12.9988 16'
    }
  ],
  [
    'path',
    {
      d: 'M18.0078 17L17.9988 17'
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

TacoIcon.displayName = 'TacoIcon';
export default TacoIcon;
