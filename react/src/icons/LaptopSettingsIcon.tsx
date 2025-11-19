import React from 'react';
import config from '../config';

interface LaptopSettingsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaptopSettingsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laptop-settings)
 * @see {@link https://clicons.dev/icon/laptop-settings}
 */
const LaptopSettingsIcon = React.forwardRef<SVGSVGElement, LaptopSettingsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.4999 16.5V8.5C20.4999 6.14298 20.4999 4.96447 19.7676 4.23223C19.0354 3.5 17.8569 3.5 15.4999 3.5H8.49988C6.14286 3.5 4.96434 3.5 4.23211 4.23223C3.49988 4.96447 3.49988 6.14298 3.49988 8.5V16.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9841 20.5H2.01567C1.63273 20.5 1.38367 20.1088 1.55493 19.7764L3.49988 16.5H20.4999L22.4448 19.7764C22.6161 20.1088 22.367 20.5 21.9841 20.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9999 12L11.9999 13.5M11.9999 12C12.7369 12 13.3808 11.6013 13.7277 11.0079M11.9999 12C11.2629 12 10.619 11.6013 10.272 11.0079M11.9999 8L11.9999 6.5M11.9999 8C12.7369 8 13.3808 8.39866 13.7277 8.99209M11.9999 8C11.2629 8 10.619 8.39865 10.272 8.99209M14.9999 8.25L13.7277 8.99209M8.99988 11.75L10.272 11.0079M14.9999 11.75L13.7277 11.0079M8.99988 8.25L10.272 8.99209M13.7277 11.0079C13.9007 10.7119 13.9999 10.3676 13.9999 10C13.9999 9.63244 13.9007 9.28805 13.7277 8.99209M10.272 8.99209C10.099 9.28804 9.99988 9.63244 9.99988 10C9.99988 10.3676 10.099 10.712 10.272 11.0079'
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

LaptopSettingsIcon.displayName = 'LaptopSettingsIcon';
export default LaptopSettingsIcon;
