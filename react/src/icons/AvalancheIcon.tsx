import React from 'react';
import config from '../config';

interface AvalancheIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AvalancheIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/avalanche)
 * @see {@link https://clicons.dev/icon/avalanche}
 */
const AvalancheIcon = React.forwardRef<SVGSVGElement, AvalancheIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 21H11.6547C14.1755 21 15.4359 21 15.8711 20.1706C16.3063 19.3412 15.6107 18.2648 14.2196 16.112L6.93559 4.83965C6.13925 3.60728 5.74108 2.9911 5.17984 3.0001C3.95309 3.01976 2.5 6 2 7'
    }
  ],
  [
    'path',
    {
      d: 'M10 5C10.6024 6.2142 11.1505 7.01476 12 8'
    }
  ],
  [
    'path',
    {
      d: 'M2 7C2.19944 7.58943 2.32706 8.50266 2.75554 8.96655C3.00648 9.23823 3.39002 9.34981 3.75053 9.25601C4.29307 9.11485 4.61512 8.53558 5.1267 8.33278C5.36623 8.23783 5.63377 8.23783 5.8733 8.33278C6.51536 8.5873 6.92764 9.39686 7.63967 9.49121C8.32392 9.58188 8.66629 8.9708 9 8.47768'
    }
  ],
  [
    'path',
    {
      d: 'M18.7267 15.0452C18.6898 15.426 18.5912 15.7902 18.4401 16.1291M18.7267 15.0452C18.936 12.8817 17.0417 11 14.762 11C14.0531 11 12.8052 11.1754 12 11.763M18.7267 15.0452C20.5289 15.0371 22 16.3985 22 18.0791C22 19.4694 20.9961 20.6412 19.6267 21'
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

AvalancheIcon.displayName = 'AvalancheIcon';
export default AvalancheIcon;
