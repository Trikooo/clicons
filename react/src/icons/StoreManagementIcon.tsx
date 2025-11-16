import React from 'react';
import config from '../config';

interface StoreManagementIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StoreManagementIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/store-management)
 * @see {@link https://clicons.dev/icon/store-management}
 */
const StoreManagementIcon = React.forwardRef<SVGSVGElement, StoreManagementIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.50003 9.99988V14.9999C3.50003 17.8283 3.50003 19.2425 4.37871 20.1212C5.25739 20.9999 6.6716 20.9999 9.50003 20.9999H13.5M20.5 11.9999V9.99988'
    }
  ],
  [
    'path',
    {
      d: 'M17 7.50171C17 8.88243 15.8807 9.99985 14.5 9.99985C13.1193 9.99985 12 8.88056 12 7.49985C12 8.88056 10.8807 9.99985 9.50003 9.99985C8.11932 9.99985 7.00003 8.88056 7.00003 7.49985C7.00003 8.88056 5.82657 9.99985 4.37903 9.99985C3.59986 9.99985 2.9001 9.67555 2.42002 9.16075C1.59464 8.27567 2.12562 6.97391 2.81449 5.9883L3.20203 5.45839C4.08387 4.25258 4.52479 3.64968 5.16494 3.32482C5.8051 2.99996 6.55203 3.00005 8.04589 3.00025L15.9551 3.00131C17.4485 3.00151 18.1952 3.00161 18.8351 3.32646C19.4751 3.65131 19.9158 4.25402 20.7974 5.45945L21.1855 5.99017C21.8744 6.97577 22.4054 8.27754 21.58 9.16261C21.0999 9.67742 20.4002 10.0017 19.621 10.0017C18.1735 10.0017 17 8.88243 17 7.50171Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.501 15.4999V13.9999M18.501 19.4999V20.9999M21.5 15.7479L20.2325 16.4882M15.5069 19.2479L16.7778 18.5057M21.5069 19.2421L20.2385 18.5013M15.5138 15.7421L16.7838 16.4838M20.2325 16.4882C19.885 15.8968 19.2423 15.4999 18.5069 15.4999C17.7733 15.4999 17.1319 15.8949 16.7838 16.4838M20.2325 16.4882C20.4069 16.785 20.5069 17.1307 20.5069 17.4999C20.5069 17.8648 20.4092 18.2068 20.2385 18.5013M16.7838 16.4838C16.6079 16.7816 16.5069 17.1289 16.5069 17.4999C16.5069 17.8666 16.6056 18.2102 16.7778 18.5057M16.7778 18.5057C17.1244 19.1003 17.769 19.4999 18.5069 19.4999C19.2466 19.4999 19.8925 19.0983 20.2385 18.5013'
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

StoreManagementIcon.displayName = 'StoreManagementIcon';
export default StoreManagementIcon;
