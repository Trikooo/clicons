import React from 'react';
import config from '../config';

interface MoneyReceiveFlowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyReceiveFlowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-receive-flow)
 * @see {@link https://clicons.dev/icon/money-receive-flow}
 */
const MoneyReceiveFlowIcon = React.forwardRef<SVGSVGElement, MoneyReceiveFlowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.01709 17C4.21666 17 5.99977 18.7831 5.99977 20.9827'
    }
  ],
  [
    'path',
    {
      d: 'M18 20.9827V20.8908C18 18.742 19.742 17 21.8908 17'
    }
  ],
  [
    'path',
    {
      d: 'M2.01709 10.981C4.21666 10.981 6 9.19956 6 6.99999C4.44655 7.04679 3.51998 7.22004 2.87868 7.86135C2 8.74003 2 10.1542 2 12.9827V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V12.9827C22 10.1542 22 8.74003 21.1213 7.86135C20.48 7.22004 19.5534 7.04509 18 6.99829C18 9.17861 19.769 10.9497 21.9423 10.9806'
    }
  ],
  [
    'path',
    {
      d: 'M12 7V3'
    }
  ],
  [
    'path',
    {
      d: 'M15 7V5'
    }
  ],
  [
    'path',
    {
      d: 'M9 7V5'
    }
  ],
  [
    'path',
    {
      d: 'M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z'
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

MoneyReceiveFlowIcon.displayName = 'MoneyReceiveFlowIcon';
export default MoneyReceiveFlowIcon;
