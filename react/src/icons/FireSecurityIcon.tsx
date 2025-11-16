import React from 'react';
import config from '../config';

interface FireSecurityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FireSecurityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fire-security)
 * @see {@link https://clicons.dev/icon/fire-security}
 */
const FireSecurityIcon = React.forwardRef<SVGSVGElement, FireSecurityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.945 22C6.55709 22 2.99998 18.4183 2.99998 14C2.99998 11.9162 3.95827 9.83244 5.20922 8C5.46594 9.5 6.57524 12.4 8.95876 12C6.33496 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10'
    }
  ],
  [
    'path',
    {
      d: 'M15.5354 16.2023C15.5354 15.5078 15.4277 14.5459 15.8359 13.9207C16.7377 12.5397 18.6013 12.7799 19.2625 14.1008C19.5631 14.7612 19.4516 15.538 19.4669 16.1931M15.5354 16.2023C14.6863 16.2902 14.3202 16.8422 14.1768 17.2829C14.0325 17.8233 13.9123 19.1442 14.1046 20.5852C14.2729 21.4858 14.9066 21.9039 15.4724 21.9541C16.0134 22.0021 18.2978 21.9901 18.9591 21.9901C19.9839 21.9901 20.5851 21.7259 20.8857 20.6452C21.0299 19.8046 21.066 18.2436 20.8255 17.2829C20.5597 16.4813 19.9245 16.2483 19.4669 16.1931M15.5354 16.2023C16.8165 16.0696 18.1849 16.0385 19.4669 16.1931'
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

FireSecurityIcon.displayName = 'FireSecurityIcon';
export default FireSecurityIcon;
