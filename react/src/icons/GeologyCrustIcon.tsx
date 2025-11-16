import React from 'react';
import config from '../config';

interface GeologyCrustIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GeologyCrustIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/geology-crust)
 * @see {@link https://clicons.dev/icon/geology-crust}
 */
const GeologyCrustIcon = React.forwardRef<SVGSVGElement, GeologyCrustIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2V22'
    }
  ],
  [
    'path',
    {
      d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9'
    }
  ],
  [
    'path',
    {
      d: 'M11.9997 18.5C10.4912 18.5 9.10269 17.9861 7.99972 17.1238M11.9997 5.5C9.10768 5.5 6.65678 7.38874 5.81322 10M6.23193 15C5.91116 14.3845 5.68601 13.7113 5.57617 13'
    }
  ],
  [
    'path',
    {
      d: 'M12 5.49906C13.6241 5.61507 16.1849 5.23044 17.052 3.36719M20.0683 6.09014C19.6281 6.50486 19.1018 6.84862 18.5 6.99906C16.5 7.49906 14.5 8.99906 16 10.9991C17.5 12.9991 19 14.4991 17.5 16.4991C16.7608 17.4846 16.2402 19.1441 18.2806 19.7811'
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

GeologyCrustIcon.displayName = 'GeologyCrustIcon';
export default GeologyCrustIcon;
