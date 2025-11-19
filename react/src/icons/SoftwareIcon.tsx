import React from 'react';
import config from '../config';

interface SoftwareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SoftwareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/software)
 * @see {@link https://clicons.dev/icon/software}
 */
const SoftwareIcon = React.forwardRef<SVGSVGElement, SoftwareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15'
    }
  ],
  [
    'path',
    {
      d: 'M3 18.5C3 17.0955 3 16.3933 3.30335 15.8889C3.43468 15.6705 3.60343 15.483 3.79997 15.3371C4.25398 15 4.88598 15 6.15 15H17.85C19.114 15 19.746 15 20.2 15.3371C20.3966 15.483 20.5653 15.6705 20.6966 15.8889C21 16.3933 21 17.0955 21 18.5C21 19.9045 21 20.6067 20.6966 21.1111C20.5653 21.3295 20.3966 21.517 20.2 21.6629C19.746 22 19.114 22 17.85 22H6.15C4.88598 22 4.25398 22 3.79997 21.6629C3.60343 21.517 3.43468 21.3295 3.30335 21.1111C3 20.6067 3 19.9045 3 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H13'
    }
  ],
  [
    'path',
    {
      d: 'M15.8904 6.61055L17.9018 4.59912'
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

SoftwareIcon.displayName = 'SoftwareIcon';
export default SoftwareIcon;
