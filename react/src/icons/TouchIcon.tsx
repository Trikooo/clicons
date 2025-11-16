import React from 'react';
import config from '../config';

interface TouchIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TouchIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touch)
 * @see {@link https://clicons.dev/icon/touch}
 */
const TouchIcon = React.forwardRef<SVGSVGElement, TouchIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.8933 21.9882C17.8416 20.075 17.9705 19.8446 18.1072 19.419C18.2439 18.9934 19.2002 17.4585 19.5386 16.3619C20.6334 12.814 19.613 12.0594 18.2527 11.0533C16.7442 9.93752 13.8989 9.37245 12.4878 9.49478V3.74357C12.4878 2.78062 11.7069 2 10.7435 2C9.78021 2 8.99928 2.78062 8.99928 3.74357V14.0031L6.93911 11.8237C6.29949 11.1302 5.27158 11.0599 4.57004 11.6907C3.90523 12.2885 3.80821 13.2952 4.34664 14.0089L5.63899 15.7218M8.86993 22L8.85039 20.9496C8.89334 19.7183 7.99734 18.9149 6.82877 17.3087C6.74457 17.193 6.66264 17.0811 6.58287 16.9729M6.58287 16.9729C6.22881 16.4924 5.91728 16.0831 5.63899 15.7218M6.58287 16.9729L7.75229 18.5229M6.58287 16.9729L5.63899 15.7218M5.63899 15.7218C5.06761 14.9801 4.63629 14.441 4.26446 13.9055'
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

TouchIcon.displayName = 'TouchIcon';
export default TouchIcon;
