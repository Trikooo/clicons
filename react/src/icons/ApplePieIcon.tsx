import React from 'react';
import config from '../config';

interface ApplePieIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ApplePieIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/apple-pie)
 * @see {@link https://clicons.dev/icon/apple-pie}
 */
const ApplePieIcon = React.forwardRef<SVGSVGElement, ApplePieIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5 7C18.6111 8.09821 20.1802 9.94542 20.7578 12.1376C21.5 12.1376 22 13.1645 22 14.0106C22 16.3424 18.5658 16.7405 18 14.5165C17.4968 16.4945 14.5032 16.4945 14 14.5165C13.4968 16.4945 10.5032 16.4945 10 14.5165C9.49677 16.4945 6.50323 16.4945 6 14.5165C5.43417 16.7405 2 16.3424 2 14.0106C2 13.1645 2.5 12.1376 3.24224 12.1376C3.81984 9.94542 5.38887 8.09821 7.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 10.5L15 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 10.5L9 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 16L4.13246 17.8974C4.79247 19.8774 5.12248 20.8675 5.90815 21.4337C6.69381 22 7.73739 22 9.82456 22H14.1754C16.2626 22 17.3062 22 18.0919 21.4337C18.8775 20.8675 19.2075 19.8774 19.8675 17.8974L20.5 16'
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

ApplePieIcon.displayName = 'ApplePieIcon';
export default ApplePieIcon;
